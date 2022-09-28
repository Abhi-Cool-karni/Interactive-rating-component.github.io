let ratings = document.querySelectorAll(".rating-list");
let rates = document.querySelector("#rates");

function userRating() {
  for (let rate = 0; rate < ratings.length; rate++) {
    // Listening for a click event on each number div
    ratings[rate].addEventListener("click", () => {
      ratings[rate].classList.add("active");
      ratings[rate].classList.contains.apply("active");
      ratings[rate].classList.remove.apply("active");
      const value = ratings[rate].innerText;
      rates.innerHTML = `You have selected ${value} out of 5.`;
      return value;
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

  rates.style.visibility = "visible";
  rates.style.background = "var(--trans)";
  rates.style.color = "var(--Orange)";
  rates.style.height = "1.5em";
  rates.style.textAlign = "center";
  rates.style.position = "relative";
  rates.style.left = "4em";
  rates.style.width = "15em";
  rates.style.borderRadius = "30px";
  rates.style.display = "block";

  const para = document.getElementById("para");
  para.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
  para.style.textAlign = "center";

  const ratings = document.getElementById("rating-numbers");
  ratings.style.display = "none";

  const sub = document.getElementById("submit");
  sub.style.display = "none";
}
