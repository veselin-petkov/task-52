import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
  document.body.onclick = addElement;


  function addElement () {
  const newArticle = document.createElement("article");

  const newContent = document.createTextNode("Hi there and greetings!");

  newArticle.appendChild(newContent);
  newArticle.classList.add("message");

  const currentArticle = document.getElementById("article1");
  document.body.insertBefore(newArticle, currentArticle);

};