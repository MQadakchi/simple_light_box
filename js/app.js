const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});
