import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
  document.body.onclick = addElement;

  document.body.onclick = createElements();

        function createElements(){
          var text = ["text1", "text2", "text3", "text4", "text5"];
          text.forEach(function(el) {
          var div = document.createElement("div");
          div.className = "finalBlock";
          div.innerHTML = el;
          document.body.appendChild(div);
})
};