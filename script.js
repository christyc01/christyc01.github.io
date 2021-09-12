var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  // console.log(scrollY)
  return (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
    );
};

var summary = document.querySelector('.summary-inside-container');
var education = document.querySelector('.education-inside-container');
var projects = document.querySelector('.projects-inside-container');
var individualProject = document.querySelector('.individual-project');
var contact = document.querySelector('.contact-inside-container');

document.getElementById('body').onscroll = function scrollEvent(e) {
  if (isInViewport(summary)) {
    document.querySelector(".summary-link").classList.add("active-link");
    document.querySelector(".education-link").classList.remove("active-link");
    document.querySelector(".projects-link").classList.remove("active-link");
    document.querySelector(".contact-link").classList.remove("active-link");
  }
  else if ((!isInViewport(summary)) && (isInViewport(education))) {
    document.querySelector(".summary-link").classList.remove("active-link");
    document.querySelector(".education-link").classList.add("active-link");
    document.querySelector(".projects-link").classList.remove("active-link");
    document.querySelector(".contact-link").classList.remove("active-link");
  }
  else if ((isInViewport(projects)) || (isInViewport(individualProject))) {
    document.querySelector(".summary-link").classList.remove("active-link");
    document.querySelector(".education-link").classList.remove("active-link");
    document.querySelector(".projects-link").classList.add("active-link");
    document.querySelector(".contact-link").classList.remove("active-link");
    console.log("projects is in viewport")
  }
    else if ((window.innerHeight + document.documentElement.scrollTop) >= document.body.scrollHeight) {
    document.querySelector(".summary-link").classList.remove("active-link");
    document.querySelector(".education-link").classList.remove("active-link");
    document.querySelector(".projects-link").classList.remove("active-link");
    document.querySelector(".contact-link").classList.add("active-link");
    console.log("contact is in viewport")
  }
}