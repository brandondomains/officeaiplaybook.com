(function () {
  // 1. Live global search & category filtering
  const input = document.getElementById('globalSearchInput');
  const groups = Array.from(document.querySelectorAll('[data-search-group]'));
  const filterButtons = Array.from(document.querySelectorAll('[data-filter-btn]'));
  let activeCategory = 'all';

  groups.forEach((group) => {
    if (!group.querySelector('.search-empty')) {
      const empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.textContent = 'No matching workflows or prompts. Try keywords like email, meetings, redaction, summary, report, status, or policy.';
      group.appendChild(empty);
    }
  });

  function visibleItems() {
    return Array.from(document.querySelectorAll('.searchable-item')).filter(
      (item) => !item.classList.contains('search-hidden')
    );
  }

  function applyFilters() {
    const query = input ? input.value.trim().toLowerCase() : '';
    groups.forEach((group) => {
      const items = Array.from(group.querySelectorAll('.searchable-item'));
      let visibleCount = 0;
      items.forEach((item) => {
        const haystack = (item.getAttribute('data-search') || item.textContent || '').toLowerCase();
        const itemCat = (item.getAttribute('data-category') || '').toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        const matchesCat = activeCategory === 'all' || itemCat === activeCategory;
        const visible = matchesQuery && matchesCat;
        item.classList.toggle('search-hidden', !visible);
        if (visible) visibleCount += 1;
      });
      const empty = group.querySelector('.search-empty');
      if (empty) empty.classList.toggle('show', visibleCount === 0);
    });
  }

  if (input) {
    input.addEventListener('input', applyFilters);
    input.addEventListener('search', applyFilters);
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        applyFilters();
        const first = visibleItems()[0];
        if (first) {
          const link = first.querySelector('a[href]');
          if (link) window.location.href = link.href;
        }
      } else if (event.key === 'Escape') {
        input.value = '';
        applyFilters();
        input.blur();
      }
    });

    // Press "/" anywhere outside an input to focus search
    document.addEventListener('keydown', (event) => {
      if (
        event.key === '/' &&
        document.activeElement !== input &&
        !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)
      ) {
        event.preventDefault();
        input.focus();
      }
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = (btn.getAttribute('data-filter-btn') || 'all').toLowerCase();
      filterButtons.forEach((b) => b.classList.toggle('active', b === btn));
      applyFilters();
    });
  });

  // 2. Copy-to-clipboard buttons (both explicit .codebox buttons and markdown fenced code blocks)
  function copyText(text, btn) {
    if (!navigator.clipboard) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showCopied(btn);
      return;
    }
    navigator.clipboard.writeText(text).then(() => showCopied(btn));
  }

  function showCopied(btn) {
    if (!btn) return;
    const original = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = '<i class="bi bi-check2"></i> Copied';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = original;
    }, 1800);
  }

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.classList.add('copy-btn');
    btn.addEventListener('click', () => {
      const selector = btn.getAttribute('data-copy');
      const target = document.querySelector(selector);
      if (target) copyText(target.textContent.trim(), btn);
    });
  });

  // Auto-enhance markdown fenced code blocks inside .prose-content that aren't already wrapped in .codebox
  document.querySelectorAll('.prose-content > pre, .prose-content > div.highlighter-rouge').forEach((block, idx) => {
    if (block.closest('.codebox')) return;
    const codeEl = block.querySelector('code') || block;
    const wrapper = document.createElement('div');
    wrapper.className = 'codebox';

    const bar = document.createElement('div');
    bar.className = 'codebar';
    bar.innerHTML = '<strong>Copy/paste prompt</strong>';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
    btn.addEventListener('click', () => copyText(codeEl.textContent.trim(), btn));

    bar.appendChild(btn);
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(bar);
    wrapper.appendChild(block);
  });
})();
