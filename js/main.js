let inpText = document.getElementById("inp-check"),
  sub = document.getElementById("sub"),
  error = document.querySelector("small"),
  right = document.querySelector(".right"),
  img = document.getElementById("img"),
  container = document.querySelector(".container");

let body = document.querySelector("body");

sub.addEventListener("click", (e) => {
  e.preventDefault();

  let regExp = /\w+@\w+.(com|org|net)/gi;
  let inpValue = inpText.value.trim();

  if (!inpValue.match(regExp)) {
    error.classList.remove("d-none");
  } else {
    error.className = "d-none";
    addData();
  }
});

function addData() {
  let submitDiv = document.createElement("div");
  submitDiv.className = "submit";
  let createImg = document.createElement("img");
  createImg.src = "images/icon-success.svg";
  createImg.alt = "";
  let thanksDiv = document.createElement("div");
  thanksDiv.className = "thanks";
  let contentThanks = document.createTextNode("Thanks for Subscribing!");
  thanksDiv.appendChild(contentThanks);
  let p = document.createElement("p");
  var contentP = document.createTextNode(
    `A confirmation email has been sent to ${inpText.value}. Please open it and click the button inside toconfirm your subscription.`
  );
  p.appendChild(contentP);
  let btn = document.createElement("button");
  btn.id = "d-message";
  btn.innerHTML = "Dismiss message";
  submitDiv.appendChild(createImg);
  submitDiv.appendChild(thanksDiv);
  submitDiv.appendChild(p);
  submitDiv.appendChild(btn);
  body.prepend(submitDiv);
  container.style.display = "none";

  btn.addEventListener("click", () => {
    submitDiv.className = "d-none";
    container.style.display = "flex";
    submitDiv.remove();
  });
}
