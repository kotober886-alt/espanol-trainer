/**
 * Bottom navigation controller.
 * Owns tab labels/state binding; screen rendering stays in app.js.
 */
export function createNavigation(options = {}) {
  const $ = options.$;
  const items = {
    home: "navHome",
    words: "navWords",
    practice: "navPractice",
    mistakes: "navMistakes",
    more: "navMore"
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

  function setActive(section) {
    const next = normalize(section);
    if (!items[next]) return active;
    active = next;

    Object.entries(items).forEach(function ([name, id]) {
      const button = $(id);
      if (!button) return;
      const selected = name === active;
      button.classList.toggle("active", selected);
      if (selected) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    return active;
  }

  function bind() {
    if (bound) return;
    bound = true;

    Object.entries(items).forEach(function ([name, id]) {
      const button = $(id);
      if (!button) return;
      button.addEventListener("click", function () {
        setActive(name);
        const action = actions[name];
        if (typeof action === "function") action();
      });
    });
  }

  return Object.freeze({
    bind,
    setActive,
    getActive: function () { return active; }
  });
}
