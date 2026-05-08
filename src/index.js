let selectedCity = null;

function updateTime() {
  if (selectedCity) {
    let cityName = selectedCity.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(selectedCity);
    document.querySelector("#cities").innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
  } else {
    // Athens
    let athensElement = document.querySelector("#athens");
    if (athensElement) {
      let athensTime = moment().tz("Europe/Athens");
      athensElement.querySelector(".date").innerHTML =
        athensTime.format("MMMM Do YYYY");
      athensElement.querySelector(".time").innerHTML =
        athensTime.format("h:mm:ss") +
        " <small>" +
        athensTime.format("A") +
        "</small>";
    }

    // Hanoi
    let hanoiElement = document.querySelector("#hanoi");
    if (hanoiElement) {
      let hanoiTime = moment().tz("Asia/Bangkok");
      hanoiElement.querySelector(".date").innerHTML =
        hanoiTime.format("MMMM Do YYYY");
      hanoiElement.querySelector(".time").innerHTML =
        hanoiTime.format("h:mm:ss") +
        " <small>" +
        hanoiTime.format("A") +
        "</small>";
    }

    // Santiago
    let santiagoElement = document.querySelector("#santiago");
    if (santiagoElement) {
      let santiagoTime = moment().tz("America/Santiago");
      santiagoElement.querySelector(".date").innerHTML =
        santiagoTime.format("MMMM Do YYYY");
      santiagoElement.querySelector(".time").innerHTML =
        santiagoTime.format("h:mm:ss") +
        " <small>" +
        santiagoTime.format("A") +
        "</small>";
    }
  }
}

function updateCity(event) {
  selectedCity = event.target.value;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  if (selectedCity === "") {
    selectedCity = null;
  }
  updateTime();
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
