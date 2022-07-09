const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = "";
  quality.value = "";
  guests.value = "";
  if (tip === "NaN") {
    tipAmount.innerHTML = "tip 0 dollars each";
  } else {
    tipAmount.innerHTML = "Tip " + tip + "dollar each";
    showTipAmount();
  }
};
showTipAmount = () => {
  let x = tipAmount;
  x.className = "show";
  setTimeout(() => {
    x.className = x.className.replace("show", "");
  }, 3000);
};
