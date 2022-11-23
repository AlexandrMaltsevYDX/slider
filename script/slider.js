window.addEventListener("DOMContentLoaded", (e) => {
  const photos = document.querySelectorAll(".card__photo");
  const buttons = document.querySelectorAll(".card__button");

  function moveElementX(element, direction, dist) {
    const y = Number(element.style.transform.replace(/[^\-?\d.]/g, ""));
    if (direction === "left") {
      dist = y - dist;
    }
    if (direction === "right") {
      dist = y + dist;
    }
    element.style.transform = `translateX(${dist}%)`;
  }

  buttons[0].addEventListener("click", function () {
    // photo[0].style.transform = "translateX(-25%)";
    photos.forEach(element => { 
        moveElementX(element, "left", 100);
    });
  });

  buttons[1].addEventListener("click", function () {
    photos.forEach(element => { 
        moveElementX(element, "right", 100);
    });
  });
});
