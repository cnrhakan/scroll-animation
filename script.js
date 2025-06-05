const container = document.querySelector(".container");
const boxes = container.querySelectorAll("div");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight * 0.85

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().bottom;
    if (boxTop < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
