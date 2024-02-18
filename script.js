function toggleMode() {
  //Nav Bar
  const toggle = document.getElementById("toggle-btn");
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

  //Discount Page
  const heading2 = document.getElementById("heading2");
  const heading3 = document.getElementById("heading3");
  const para2 = document.getElementById("para2");

  //Product Page
  const heading4 = document.getElementById("heading4");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const details = document.querySelectorAll(".details");

  //FAQS
  const faq = document.getElementById("faq-heading");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    icon.src = "moon.svg";
    icon.style.filter = "invert(0)";
    body.style.backgroundColor = "#f0f0f0";
    toggle.style.backgroundColor = "white";
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
    heading1.style.color = "black";
    para1.style.color = "black";
    box.forEach((item) => {
      item.style.color = "black";
    });
    //Discount Page
    heading2.style.color = "black";
    heading3.style.color = "black";
    para2.style.color = "black";
    //Product Page
    heading4.style.color = "black";
    button1.style.color = "black";
    button2.style.color = "black";
    button3.style.color = "black";
    details.forEach((item) => {
      item.style.color = "black";
    });
    //FAQs
    faq.style.color = "black";
  } else {
    body.classList.add("dark-mode");
    icon.src = "sun.svg";
    icon.style.filter = "invert(1)";
    body.style.backgroundColor = "black";
    toggle.style.backgroundColor = "#f0f0f0";
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
    //Discount Page
    heading2.style.color = "white";
    heading3.style.color = "white";
    para2.style.color = "white";
    //Product page
    heading4.style.color = "white";
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "white";
    button3.style.backgroundColor = "white";
    details.forEach((item) => {
      item.style.color = "white";
    });
    //FAQs
    faq.style.color = "white";
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

  const sectionId = linkId + "-section";
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });

  toggleNav();
}
