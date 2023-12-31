const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("nav>ul");
const ham_child = hamburger.lastElementChild;
const links = document.querySelectorAll(".link");

//preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

hamburger.addEventListener("click", () => {
  ul.classList.toggle("ham_active");
  if (ul.classList.contains("ham_active")) {
    ham_child.classList.replace("fa-bars", "fa-xmark");
    document.querySelector(".open-close").innerHTML = "close";
  } else {
    ham_child.classList.replace("fa-xmark", "fa-bars");
    document.querySelector(".open-close").innerHTML = "menu";
  }
});

links.forEach((elm) => {
  elm.addEventListener("click", () => {
    ul.classList.remove("ham_active");
    ham_child.classList.replace("fa-xmark", "fa-bars");
    document.querySelector(".open-close").innerHTML = "menu";
  });
});

// scroll animation
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 200) {
    document.querySelector(".top").style.opacity = "1";
    this.document.querySelector(".logo>a").style.transform = "rotate(0deg)";
    console.log(this.document.querySelector(".logo>a"));
  } else {
    this.document.querySelector(".logo>a").style.transform = "rotate(-2deg)";
    document.querySelector(".top").style.opacity = "0";
  }
});
