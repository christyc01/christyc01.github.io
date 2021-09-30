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

let eatingHead = document.getElementById("eating-head");
const onMouseMove = (e) => {
  eatingHead.style.left = e.pageX + "px";
  eatingHead.style.top = e.pageY + "px";
};

let count = parseInt(localStorage.getItem("storedCount")) || 0;
document.getElementById("count").innerText = parseInt(count);

let addToCount = (e) => {
  let objectWithPoints = document.querySelectorAll("h1, h2, p.project-title, i");
  let i;
  for (i = 0; i < objectWithPoints.length; i++) {
    if (e.target === objectWithPoints[i]) {
      setTimeout(function() {
        count = count+1;
        localStorage.setItem("storedCount", count);
        console.log("stored", localStorage.getItem("storedCount"))
        document.getElementById("count").innerText = parseInt(count);
        document.getElementById("special-effect-container").classList.add("special-effect-toggle");
        setTimeout(function() {
          document.getElementById("special-effect-container").classList.remove("special-effect-toggle");
        }, 2000)
      }, 7500
      )
    }
  }
}

navigation.addEventListener("click", makeActive);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseover", addToCount);