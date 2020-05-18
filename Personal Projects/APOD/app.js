var api_key = "AoG6kciRmlzf6VjRDgcWQE4eWliz8tRDVy8M1yi9";
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var req = new XMLHttpRequest();

req.open("GET", url + api_key, true);
req.send();

req.addEventListener("load", () => {
  if (req.status == 200 && req.readyState == 4) {
    var response = JSON.parse(req.responseText);
    document.querySelector("#title").textContent = response.title;
    document.querySelector("#date").textContent = response.date;
    document.querySelector("iframe").src = response.url;
    document.querySelector("#description").textContent = response.explanation;
  }
});
