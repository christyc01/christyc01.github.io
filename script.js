const summary = document.querySelector('.summary-inside-container');
const education = document.querySelector('.education-inside-container');
const projects = document.querySelector('.projects-inside-container');
const individualProject = document.querySelector('.individual-project');
// const contact = document.querySelector('.contact-inside-container');

const navigation = document.querySelector(".navigation");
const summaryLink = document.querySelector(".summary-link");
const educationLink = document.querySelector(".education-link");
const projectsLink = document.querySelector(".projects-link");
// const contactLink = document.querySelector(".contact-link");

const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  // console.log(scrollY)
  return (
    bounding.top >= 100 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
    );
};


document.getElementById('body').onscroll = function scrollEvent(e) {
  console.log("scroll e: ", e)
  // console.log('e.srcElement.location.hash: ', e.srcElement.location.hash)
  if (isInViewport(summary)) {
    summaryLink.classList.add("active-link");
    educationLink.classList.remove("active-link");
    projectsLink.classList.remove("active-link");
    // contactLink.classList.remove("active-link");
  }
  else if ((!isInViewport(summary)) && (isInViewport(education))) {
    summaryLink.classList.remove("active-link");
    educationLink.classList.add("active-link");
    projectsLink.classList.remove("active-link");
    // contactLink.classList.remove("active-link");
  }
  else if (
    // (!isInViewport(education)) && (
      (isInViewport(projects)) || (isInViewport(individualProject)))
      // ) 
      {
    summaryLink.classList.remove("active-link");
    educationLink.classList.remove("active-link");
    projectsLink.classList.add("active-link");
    // contactLink.classList.remove("active-link");
  }
  // else if ((window.innerHeight + document.documentElement.scrollTop) >= document.body.scrollHeight) {
  //   summaryLink.classList.remove("active-link");
  //   educationLink.classList.remove("active-link");
  //   projectsLink.classList.remove("active-link");
  //   // contactLink.classList.add("active-link");
  // }
}

function makeActive(e) {
  summaryLink.classList.remove("active-link");
  educationLink.classList.remove("active-link");
  projectsLink.classList.remove("active-link");
  // contactLink.classList.remove("active-link");
  console.log("summaryLink.classList: ", summaryLink.classList)
  console.log("educationLink.classList: ", educationLink.classList)
  console.log("projectsLink.classList: ", projectsLink.classList)
  // console.log("contactLink.classList: ", contactLink.classList)
  // console.log(document.querySelector(e))
  console.log((e.target.classList.value))
  if (e.target.classList.contains('summary-link')) {
    summaryLink.classList.add("active-link");
  }
  else if (e.target.classList.contains('education-link')) {
    educationLink.classList.add("active-link");
  }
  else if (e.target.classList.contains('projects-link')) {
    projectsLink.classList.add("active-link");
    summaryLink.classList.remove("active-link");
    educationLink.classList.remove("active-link");
    // contactLink.classList.remove("active-link");
  }
  // else if (e.target.classList.contains('contact-link')) {
  //   contactLink.classList.add("active-link");
  // }
}
navigation.addEventListener('click', makeActive);