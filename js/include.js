(function () {
  var isSubdir = window.location.pathname.toLowerCase().indexOf('/pages/') !== -1 || window.location.pathname.toLowerCase().indexOf('\\pages\\') !== -1;
  var basePath = isSubdir ? "../" : "";

  // Array of scripts to load in order after components are injected
  var scripts = [
    "js/library.js",
    "js/header.js",
    "js/home.js"
  ];

  function loadScript(index) {
    if (index >= scripts.length) {
      // Trigger jQuery and native window load events since they might have already fired
      if (window.jQuery) {
        window.jQuery(window).trigger('load');
      }
      var event;
      if (typeof (Event) === 'function') {
        event = new Event('load');
      } else {
        event = document.createEvent('Event');
        event.initEvent('load', true, true);
      }
      window.dispatchEvent(event);

      // Bulletproof fallback to ensure preloader is hidden
      setTimeout(function () {
        var preloader = document.getElementById('ht-preloader');
        if (preloader) {
          preloader.style.transition = 'opacity 0.5s ease';
          preloader.style.opacity = '0';
          setTimeout(function () {
            preloader.style.display = 'none';
          }, 500);
        }
      }, 100);
      return;
    }

    var script = document.createElement('script');
    script.src = basePath + scripts[index];
    script.async = false; // Maintain execution order in all browsers
    script.onload = function () {
      loadScript(index + 1);
    };
    script.onerror = function () {
      console.error("Failed to load script: " + basePath + scripts[index]);
      loadScript(index + 1); // Try to load the next one anyway
    };
    document.body.appendChild(script);
  }

  function isAbsoluteOrSpecial(path) {
    return /^(https?:|mailto:|tel:|javascript:|#|\/\/)/i.test(path);
  }

  function adjustRelativePaths(container, prefix) {
    if (!prefix) return;

    // src attributes
    var srcElements = container.querySelectorAll('[src]');
    srcElements.forEach(function (el) {
      var src = el.getAttribute('src');
      if (src && !isAbsoluteOrSpecial(src)) {
        el.setAttribute('src', prefix + src);
      }
    });

    // href attributes
    var hrefElements = container.querySelectorAll('[href]');
    hrefElements.forEach(function (el) {
      var href = el.getAttribute('href');
      if (href && !isAbsoluteOrSpecial(href)) {
        el.setAttribute('href', prefix + href);
      }
    });

    // data-bg-img attributes
    var bgElements = container.querySelectorAll('[data-bg-img]');
    bgElements.forEach(function (el) {
      var bg = el.getAttribute('data-bg-img');
      if (bg && !isAbsoluteOrSpecial(bg)) {
        el.setAttribute('data-bg-img', prefix + bg);
        if (el.style.backgroundImage) {
          el.style.backgroundImage = "url('" + prefix + bg + "')";
        }
      }
    });
  }

  function includeHTML(callback) {
    var elements = document.querySelectorAll('[data-include]');
    var remaining = elements.length;
    if (remaining === 0) {
      callback();
      return;
    }

    var loadedCount = 0;
    function checkDone() {
      loadedCount++;
      if (loadedCount === remaining) {
        callback();
      }
    }

    elements.forEach(function (el) {
      var file = el.getAttribute('data-include');
      fetch(file)
        .then(function (response) {
          if (response.ok) {
            return response.text();
          }
          throw new Error('Network response was not ok');
        })
        .then(function (html) {
          // Replace placeholder element with the fetched HTML
          var temp = document.createElement('div');
          temp.innerHTML = html.trim();

          // Adjust paths for the loaded component
          adjustRelativePaths(temp, basePath);

          var fragment = document.createDocumentFragment();
          while (temp.firstChild) {
            fragment.appendChild(temp.firstChild);
          }
          el.parentNode.replaceChild(fragment, el);
          checkDone();
        })
        .catch(function (error) {
          console.error('Error including html file ' + file + ':', error);
          checkDone();
        });
    });
  }

  // Check DOM state to start load immediately or on ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      includeHTML(function () {
        loadScript(0);
      });
    });
  } else {
    includeHTML(function () {
      loadScript(0);
    });
  }
})();
