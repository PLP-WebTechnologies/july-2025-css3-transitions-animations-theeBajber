// Part 2: JavaScript Functions with Parameters & Return Values

function changeBoxState(state) {
  const box = document.getElementById("box");

  if (state === "animate") {
    box.classList.add("animate");
    box.classList.remove("reset");
  } else if (state === "reset") {
    box.classList.add("reset");
    box.classList.remove("animate");
  }
  return box.className;
}

// Demonstrating scope
let globalCounter = 0;

function incrementCounter(step) {
  let localCounter = step;
  globalCounter += localCounter;
  return globalCounter;
}

// Part 3: Combine CSS Animations with JavaScript
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

animateBtn.addEventListener("click", () => {
  changeBoxState("animate");
  console.log("Counter:", incrementCounter(1));
});

resetBtn.addEventListener("click", () => {
  changeBoxState("reset");
});
// Modal Popup
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
