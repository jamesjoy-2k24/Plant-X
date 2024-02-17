function toggleMode() {
  //Nav Bar
  const body = document.body;
  const icon = document.getElementById("icon-img");
  const logo = document.querySelector(".logo");
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const product = document.getElementById("product");
  const faqs = document.getElementById("faqs");
  const contact = document.getElementById("contact");

  //Home Page
  const heading = document.getElementById("heading");
  const para = document.getElementById("para");

  //About page
  const heading1 = document.getElementById("heading1");
  const para1 = document.getElementById("para1");
  const box = document.querySelectorAll(".box");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    icon.src = "moon.svg";
    icon.style.filter = "invert(0)";
    body.style.backgroundColor = "#f0f0f0";
    logo.style.color = "black";
    home.style.color = "black";
    about.style.color = "black";
    product.style.color = "black";
    faqs.style.color = "black";
    contact.style.color = "black";
    //Home Page
    heading.style.color = "black";
    para.style.color = "black";
    //About Page
    box.forEach((item) => {
      item.style.color = "black";
    });

    heading1.style.color = "black";
    para1.style.color = "black";
  } else {
    body.classList.add("dark-mode");
    icon.src = "sun.svg";
    icon.style.filter = "invert(1)";
    body.style.backgroundColor = "black";
    logo.style.color = "white";
    home.style.color = "white";
    about.style.color = "white";
    product.style.color = "white";
    faqs.style.color = "white";
    contact.style.color = "white";
    //Home Page
    heading.style.color = "white";
    para.style.color = "white";
    //About Page
    heading1.style.color = "white";
    para1.style.color = "white";
    box.forEach((item) => {
      item.style.color = "white";
    });
  }
}

function toggleNav() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

function activateLink(linkId) {
  const links = document.querySelectorAll(".items a");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  const selectedLink = document.getElementById(linkId);
  selectedLink.classList.add("active");
  toggleNav();
}
