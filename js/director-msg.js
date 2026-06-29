// Director Message Read More / Read Less toggle
// This runs after all components are injected by include.js
(function initDirectorReadMore() {
  var btn  = document.getElementById('directorReadMoreBtn');
  var wrap = document.getElementById('directorMsgWrap');
  var fade = document.getElementById('directorFade');
  if (!btn || !wrap || !fade) return;

  var expanded = false;

  btn.addEventListener('click', function () {
    expanded = !expanded;
    if (expanded) {
      wrap.style.maxHeight = wrap.scrollHeight + 'px';
      fade.style.opacity   = '0';
      btn.querySelector('span').textContent = 'Read Less';
      btn.querySelector('i').className      = 'flaticon-minus';
    } else {
      wrap.style.maxHeight = '230px';
      fade.style.opacity   = '1';
      btn.querySelector('span').textContent = 'Read Full Message';
      btn.querySelector('i').className      = 'flaticon-plus';
    }
  });
})();
