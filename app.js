let ratings = document.querySelectorAll(".rating-list");
let rates = document.querySelector("#rates");

function userRating() {
  for (let rate = 0; rate < ratings.length; rate++) {
    // Listening for a click event on each number div
    ratings[rate].addEventListener("click", () => {
      const value = ratings[rate].innerText;
      rates.innerHTML = `You have selected ${value} out of 5.`;
    });
  }
}

userRating();
function ThankYou() {
  let thankYou = document.getElementById("star-icon");
  thankYou.innerHTML = `<img src="illustration-thank-you.svg" alt="ThankYou image">`;
  thankYou.style.display = "flex";
  thankYou.style.alignSelf = "center";
  thankYou.style.width = "162px";
  thankYou.style.height = "108px";
  thankYou.style.background = "none";

  const heading = document.getElementById("h2");
  heading.innerText = "Thank you!";
  heading.style.textAlign = "center";

  const para = document.getElementById("para");
  para.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
  para.style.textAlign = "center";

  const ratings = document.getElementById("rating-numbers");
  ratings.style.display = "none";

  const sub = document.getElementById("submit");
  sub.style.display = "none";
}
