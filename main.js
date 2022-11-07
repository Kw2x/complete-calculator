const clear = document.getElementsByClassName("clr-btn");
clear.addEventListener("click", () => {
  const display = document.getElementsById("display").innerHTML = "";
  return display;
})