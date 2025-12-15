const text = ["Python Developer", "UI/UX Designer", "Problem Solver"];
let i = 0;

function changeText() {
  const p = document.querySelector(".hero p");
  p.textContent = text[i];
  i = (i + 1) % text.length;
}

setInterval(changeText, 2000);
