document.addEventListener("DOMContentLoaded", function () {
  const ninjaKeys = document.querySelector("ninja-keys");
  if (!ninjaKeys) return;

  const searchTheme = determineComputedTheme();
  if (searchTheme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }

  window.openSearchModal = function () {
    const $navbarNav = $("#navbarNav");
    if ($navbarNav.hasClass("show")) {
      $navbarNav.collapse("hide");
    }
    ninjaKeys.open();
  };
});
