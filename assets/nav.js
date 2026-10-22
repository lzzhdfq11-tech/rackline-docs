/* Rackline docs: mobile menu toggle and the "On this page" panel.
   Without JavaScript the menu stays fully visible and the table of contents opens on click. */
(function () {
  document.documentElement.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    var narrow = window.matchMedia('(max-width: 999px)');
    var toc = document.querySelector('.toc-details');
    if (toc) {
      if (!narrow.matches) toc.setAttribute('open', '');
      toc.querySelector('summary').addEventListener('click', function (event) {
        if (!narrow.matches) event.preventDefault();
      });
    }

    var nav = document.querySelector('.site-nav');
    var button = document.querySelector('.nav-toggle');
    if (!nav || !button) return;

    var setOpen = function (open) {
      button.setAttribute('aria-expanded', String(open));
      nav.setAttribute('data-open', String(open));
    };
    setOpen(false);

    button.addEventListener('click', function () {
      setOpen(button.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        button.focus();
      }
    });
  });
})();
