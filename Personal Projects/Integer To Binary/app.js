const intToBinary = (e) => {
  e.preventDefault();

  var value = document.querySelector("#value").value;

  if (value != "") {
    var binary = parseInt(value).toString(2);

    var subScript = document.createElement("sub");
    subScript.innerHTML = "2";
    document.querySelector(".output").innerHTML = binary;

    document.querySelector(".output").appendChild(subScript);
  } else {
    alert("Input field cannot be empty!");
  }
};

document.querySelector("#btn").addEventListener("click", intToBinary);
