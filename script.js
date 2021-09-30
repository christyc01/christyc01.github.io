const summary = document.querySelector(".summary-inside-container");
const education = document.querySelector(".education-inside-container");
const projects = document.querySelector(".projects-inside-container");
const individualProject = document.querySelector(".individual-project");
const navigation = document.querySelector(".navigation");
const summaryLink = document.querySelector(".summary-link");
const educationLink = document.querySelector(".education-link");
const projectsLink = document.querySelector(".projects-link");
const snack = document.querySelectorAll(".snack");

// Check if the element is in the viewport (for highlighting the correct nav link when scrolling)
const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 100 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Highlight the correct nav link when scrolling
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

// Highlight the correct nav link when clicking it
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

// Make the head follow the mouse around
let eatingHead = document.getElementById("eating-head");
const onMouseMove = (e) => {
  eatingHead.style.left = e.pageX + "px";
  eatingHead.style.top = e.pageY + "px";
};

// Record points collected (in local storage) and add special effects, oooh!
let count = parseInt(localStorage.getItem("storedCount")) || 0;
document.getElementById("count").innerText = parseInt(count);

let addToCount = (e) => {
  let objectWithPoints = document.querySelectorAll("i, .project-title a, .snack");
  let i;
  for (i = 0; i < objectWithPoints.length; i++) {
    if (e.target === objectWithPoints[i]) {
      setTimeout(function() {
        count = count+1;
        localStorage.setItem("storedCount", count);
        // console.log("stored", localStorage.getItem("storedCount"))
        document.getElementById("count").innerText = parseInt(count);
        document.getElementById("special-effect-container").classList.add("special-effect-toggle");
        setTimeout(function() {
          document.getElementById("special-effect-container").classList.remove("special-effect-toggle");
        }, 2000)
      }, 500
      )
    }
  }
}

// Hide the snacks that are eaten
snack.forEach(snack =>
  snack.addEventListener("mouseover", () => snack.classList.add("hide-snack")))

navigation.addEventListener("click", makeActive);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseover", addToCount);
