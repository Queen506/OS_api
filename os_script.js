function Fatch() {
  fetch("https://countrysapi.573mm.repl.co/countrys")
    .then((response) => response.json())
    .then((data) => showV(data));
}

function showValue() {
  let name = document.getElementById("name").value;
  document.getElementById("ans").innerHTML = name;
  document.getElementById("hello").style.display = "none";
}

function showV(data) {
  let mycon = document.querySelector("#body");
  var name = document.getElementById("name").value;
  //document.getElementById("ans").innerHTML = name;
  data.forEach((value) => {
    let myEl = document.createElement("h2");

    if (name == value.country) {
      myEl.innerText = `Capital city : ${value.city}`;
      mycon.appendChild(myEl);
      document.getElementById("hello").style.display = mycon.appendChild(myEl);
    }
  });
}
