const workSection = document.querySelector(".work");
const projectsButton = document.querySelector(".projects-button");
const arrow = document.querySelector(".arrow");
const contactArea = document.querySelector(".contact");
const contactButton = document.querySelector(".contact-button");

const smoothScroll = section => {
  section.scrollIntoView({ block: "start", behavior: "smooth" });
};

arrow.addEventListener("click", () => {
  smoothScroll(workSection);
});

projectsButton.addEventListener("click", () => smoothScroll(workSection));

contactButton.addEventListener("click", () => smoothScroll(contactArea));
