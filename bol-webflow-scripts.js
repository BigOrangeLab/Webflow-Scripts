(function () {
    document.addEventListener("DOMContentLoaded", function () {
        let tabComponents = document.querySelectorAll(".component__tabs");
        if (tabComponents.length > 0) {
            tabComponents.forEach((tabComponent) => {
                let tabNav = tabComponent.querySelector(".tabs__nav");
                let tabContent = tabComponent.querySelector(".tabs__content");
                if (tabNav && tabContent) {
                    let tabButtons = tabNav.querySelectorAll("button");
                    let tabCards = tabContent.querySelectorAll(".element__tabs__card--3cols");
                    if (tabButtons.length > 0 && tabCards.length > 0) {
                        tabButtons[0].classList.add('active');
                        tabButtons.forEach((tabButton, index) => {
                            tabButton.addEventListener("click", function () {
                                tabNav.querySelector('.active').classList.remove('active');
                                tabButton.classList.add('active');
                                tabContent.style.overflow = "auto";
                                tabContent.scrollTo({
                                    left: tabCards[index].offsetLeft,
                                    behavior: 'smooth'
                                });
                                tabContent.style.overflow = "hidden";
                            });
                        });
                    }
                }
            });
        }
    });
})();