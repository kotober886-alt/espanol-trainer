/**
 * Shared navigation controller for desktop header and mobile bottom tabbar.
 * Screen rendering stays in app.js.
 */
export function createNavigation(options = {}) {
  const $ = options.$;
  const controls = {
    home: ["navHome", "headerNavHome"],
    words: ["navWords", "headerNavWords"],
    practice: ["navPractice", "headerNavPractice"],
    mistakes: ["navMistakes", "headerNavMistakes"],
    more: ["navMore"]
  };
  const actions = {
    home: options.onHome,
    words: options.onWords,
    practice: options.onPractice,
    mistakes: options.onMistakes,
    more: options.onMore
  };

  let active = "home";
  let bound = false;

  function normalize(section) {
    return section === "learn" ? "words" : section;
  }

  function eachControl(callback) {
    Object.entries(controls).forEach(function ([section, ids]) {
      ids.forEach(function (id) {
        const button = $(id);
        if (button) callback(button, section, id);
      });
    });
  }

  function setActive(section) {
    const next = normalize(section);
    if (!controls[next]) return active;
    active = next;

    eachControl(function (button, name, id) {
      const selected = name === active;
      if (id.indexOf("headerNav") === 0) {
        button.classList.toggle("is-active", selected);
      } else {
        button.classList.toggle("active", selected);
      }
      if (selected) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    return active;
  }

  function setBadge(section, value) {
    const count = Math.max(0, Number(value) || 0);
    document.querySelectorAll('[data-nav-badge="'+section+'"]').forEach(function (badge) {
      badge.textContent = String(count);
      badge.hidden = count <= 0;
      badge.setAttribute("aria-label", count+" ошибок");
    });
  }

  function bind() {
    if (bound) return;
    bound = true;

    eachControl(function (button, name) {
      button.addEventListener("click", function () {
        setActive(name);
        if (typeof options.onNavigate === "function") {
          options.onNavigate(name, { timestamp: Date.now(), sourceId: button.id || "" });
        }
        const action = actions[name];
        if (typeof action === "function") action();
      });
    });
  }

  return Object.freeze({
    bind,
    setActive,
    setBadge,
    getActive: function () { return active; }
  });
}
