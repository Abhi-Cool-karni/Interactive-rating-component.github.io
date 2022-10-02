const para = document.getElementById("para");
const heading = document.getElementById("h2");
let ratings = document.querySelectorAll(".rating-list");
let rates = document.querySelector("#rates");
const ratingNumber = document.getElementById("rating-numbers");
let submit = document.getElementById("submit");
let thankYou = document.getElementById("star-icon");
const sub = document.getElementById("submit");

let value = undefined;

for (let rate = 0; rate < ratings.length; rate++) {
  // Listening for a click event on each number div
  ratings[rate].addEventListener("click", () => {
    // looping through the numbers to check for a previously selected rating and removing if such.
    // Necessary in order to have only one rating selected at a time.
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains("active");
      ratings[i].classList.remove("active");
    }
    // add the selected class which highlights the selected rating
    ratings[rate].classList.add("active");
    value = ratings[rate].innerText;

    return value;
  });
}

function ThankYou() {
  if (value === undefined) {
    alert("Please provide the ratings!");
  } else {
    rates.innerHTML = `You have selected ${value} out of 5.`;

    thankYou.innerHTML = `<img src="illustration-thank-you.svg" alt="ThankYou image">`;
    thankYou.style.display = "flex";
    thankYou.style.alignSelf = "center";
    thankYou.style.width = "162px";
    thankYou.style.height = "108px";
    thankYou.style.background = "none";

    heading.innerText = "Thank you!";
    heading.style.textAlign = "center";

    rates.style.visibility = "visible";
    rates.style.background = "var(--trans)";
    rates.style.color = "var(--Orange)";
    rates.style.height = "1.5em";
    rates.style.textAlign = "center";
    rates.style.position = "relative";
    rates.style.left = "auto";
    rates.style.width = "15em";
    rates.style.borderRadius = "30px";
    rates.style.alignSelf = "center";
    rates.style.display = "block";

    para.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
    para.style.textAlign = "center";

    ratingNumber.style.display = "none";

    sub.style.display = "none";
  }
}
