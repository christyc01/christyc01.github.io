const summary = document.querySelector(".summary-inside-container");
const education = document.querySelector(".education-inside-container");
const projects = document.querySelector(".projects-inside-container");
const individualProject = document.querySelector(".individual-project");
const navigation = document.querySelector(".navigation");
const summaryLink = document.querySelector(".summary-link");
const educationLink = document.querySelector(".education-link");
const projectsLink = document.querySelector(".projects-link");

const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 100 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};

document.getElementById("body").onscroll = function scrollEvent(e) {
  if (isInViewport(summary)) {
    summaryLink.classList.add("active-link");
    educationLink.classList.remove("active-link");
    projectsLink.classList.remove("active-link");
  } else if (!isInViewport(summary) && isInViewport(education)) {
    summaryLink.classList.remove("active-link");
    educationLink.classList.add("active-link");
    projectsLink.classList.remove("active-link");
  } else if (isInViewport(projects) || isInViewport(individualProject)) {
    summaryLink.classList.remove("active-link");
    educationLink.classList.remove("active-link");
    projectsLink.classList.add("active-link");
  }
};

function makeActive(e) {
  summaryLink.classList.remove("active-link");
  educationLink.classList.remove("active-link");
  projectsLink.classList.remove("active-link");
  if (e.target.classList.contains("summary-link")) {
    summaryLink.classList.add("active-link");
  } else if (e.target.classList.contains("education-link")) {
    educationLink.classList.add("active-link");
  } else if (e.target.classList.contains("projects-link")) {
    projectsLink.classList.add("active-link");
    summaryLink.classList.remove("active-link");
    educationLink.classList.remove("active-link");
  }
}

navigation.addEventListener("click", makeActive);

let eatingHead = document.getElementById("eating-head");
const onMouseMove = (e) => {
  eatingHead.style.left = e.pageX + "px";
  eatingHead.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);
