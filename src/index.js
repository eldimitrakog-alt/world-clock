function updateTime() {
  // athens
  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("MMMM	Do YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
  // Hanoi
  let hanoiElement = document.querySelector("#hanoi");
  if (hanoiElement) {
    let hanoiDateElement = hanoiElement.querySelector(".date");
    let hanoiTimeElement = hanoiElement.querySelector(".time");
    let hanoiTime = moment().tz("Asia/Bangkok");

    hanoiDateElement.innerHTML = hanoiTime.format("MMMM	Do YYYY");
    hanoiTimeElement.innerHTML = hanoiTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
  // Santiago
  let santiagoElement = document.querySelector("#santiago");
  if (santiagoElement) {
    let santiagoDateElement = santiagoElement.querySelector(".date");
    let santiagoTimeElement = santiagoElement.querySelector(".time");
    let santiagoTime = moment().tz("America/Santiago");
    santiagoDateElement.innerHTML = santiagoTime.format("MMMM	Do YYYY");
    santiagoTimeElement.innerHTML = santiagoTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
