var items = document.querySelectorAll("li");
for (var i = 0; i < items.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  items[i].appendChild(span);
}

var close = document.querySelectorAll(".close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var container = this.parentElement;
    container.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

var add = document.querySelector("#add");

add.addEventListener("click", function () {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var inputText = document.createTextNode(inputValue);
  li.appendChild(inputText);
  if (inputValue === "") {
    alert("Input field cannot be empty!!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.querySelectorAll(".close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var container = this.parentElement;
      container.style.display = "none";
    };
  }
});
