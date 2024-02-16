function toggleMode() {
  const body = document.body;
  const icon = document.getElementById("icon-img");
  const logo = document.querySelector(".logo");
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const product = document.getElementById("product");
  const faqs = document.getElementById("faqs");
  const contact = document.getElementById("contact");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    icon.src = "sun.svg";
    icon.style.filter = "invert(0)";
    body.style.backgroundColor = "#f0f0f0";
    logo.style.color = "black";
    home.style.color = "black";
    about.style.color = "black";
    product.style.color = "black";
    faqs.style.color = "black";
    contact.style.color = "black";
  } else {
    body.classList.add("dark-mode");
    icon.src = "moon.svg";
    icon.style.filter = "invert(1)";
    body.style.backgroundColor = "black";
    logo.style.color = "white";
    home.style.color = "white";
    about.style.color = "white";
    product.style.color = "white";
    faqs.style.color = "white";
    contact.style.color = "white";
  }
}

function toggleMenu() {
  const items = document.getElementById("nav-links");

  if (items.classList.contains("show")) {
    items.classList.remove("show");
  } else {
    items.classList.add("show");
  }
}
