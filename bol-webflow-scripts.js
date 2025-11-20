(function () {
  document.addEventListener("DOMContentLoaded", function () {
    //start tabs component
    let tabComponents = document.querySelectorAll(".component__tabs");
    if (tabComponents.length > 0) {
      tabComponents.forEach((tabComponent) => {
        let tabNav = tabComponent.querySelector(".tabs__nav");
        let tabContent = tabComponent.querySelector(".tabs__content");
        if (tabNav && tabContent) {
          let tabButtons = tabNav.querySelectorAll("button");
          let tabCards = tabContent.querySelectorAll(
            ".element__tabs__card--3cols"
          );
          if (tabButtons.length > 0 && tabCards.length > 0) {
            tabButtons[0].classList.add("active");
            tabButtons.forEach((tabButton, index) => {
              tabButton.addEventListener("click", function () {
                tabNav.querySelector(".active").classList.remove("active");
                tabButton.classList.add("active");
                tabContent.style.overflow = "auto";
                tabContent.scrollTo({
                  left: tabCards[index].offsetLeft,
                  behavior: "smooth",
                });
                tabContent.style.overflow = "hidden";
              });
            });
          }
        }
      });
    }
    //end tabs component

    //start video player
    const intentVideos = document.querySelectorAll("iframe[bol-intent-src]");
    const videoObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const iframe = entry.target;
          const src = iframe.getAttribute("bol-intent-src");
          if (!src) return;

          const rect = iframe.getBoundingClientRect();
          const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;

          const isVerticallyVisible =
            rect.top < viewportHeight + 200 && rect.bottom > -200;

          if (isVerticallyVisible) {
            iframe.src = src;
            iframe.removeAttribute("bol-intent-src");
            console.log("Loaded intent video (Y-axis only):", src);
            obs.unobserve(iframe);
          }
        });
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0,
      }
    );

    intentVideos.forEach((iframe) => videoObserver.observe(iframe));
    //end video player
  });
})();
