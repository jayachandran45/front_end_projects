const darkEle = document.querySelector(".dark");
const lightEle = document.querySelector(".light");
darkEle.addEventListener("click", () => {
  lightEle.classList.remove("btm-style");
  document.body.classList.replace("light-theme", "dark-theme");
  darkEle.classList.add("btm-style");
});
lightEle.addEventListener("click", () => {
  darkEle.classList.remove("btm-style");
  document.body.classList.replace("dark-theme", "light-theme");
  lightEle.classList.add("btm-style");
});
