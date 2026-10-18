const billInput = document.getElementById('billamt');
const tipsInput = document.getElementById('tips');
const tip = document.getElementById('tip');

function calc() {
  const bill = Number(billInput.value);
  const tips = Number(tipsInput.value);
  const total = bill + (bill * tips) / 100;
  tip.textContent = total;
}