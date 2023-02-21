const range1 = document.getElementById('customRange1');
const rangeValue1 = document.getElementById('rangeValue1');
rangeValue1.innerHTML = range1.value;
range1.addEventListener('input', () => {
    rangeValue1.innerHTML = range1.value;
});
range1.addEventListener('input', calcularValores);

const range2 = document.getElementById('customRange2');
const rangeValue2 = document.getElementById('rangeValue2');
rangeValue2.innerHTML = range2.value;
range2.addEventListener('input', () => {
    rangeValue2.innerHTML = range2.value;
});
range2.addEventListener('input', calcularValores);

const range3 = document.getElementById('customRange3');
const rangeValue3 = document.getElementById('rangeValue3');
rangeValue3.innerHTML = range3.value;
range3.addEventListener('input', () => {
    rangeValue3.innerHTML = range3.value +"%";
});
range3.addEventListener('input', calcularValores);

const range4 = document.getElementById('customRange4');
const rangeValue4 = document.getElementById('rangeValue4');
rangeValue4.innerHTML = range4.value;
range4.addEventListener('input', () => {
    rangeValue4.innerHTML = range4.value;
});
range4.addEventListener('input', calcularValores);

const roiValue = document.getElementById("roiValue");
const hoursSavedValue = document.getElementById("hoursSaved");
const additionalRevenueValue = document.getElementById("additionalRevenue");

const thumb = range1.querySelector('::-webkit-slider-thumb');
range1.addEventListener('input', () => {
  thumb.style.background = `linear-gradient(to right, #007bff 0%, #007bff ${(range1.value / range1.max) * 100}%,
   #dddddd ${(range1.value / range1.max) * 100}%, #dddddd 100%)`;
});

function calcularValores() {
  const dealsPerYear = parseInt(range1.value);
  const avgBuyersPerList = parseInt(range2.value);
  const avgFeesPerTransaction = parseFloat(range3.value);
  const numOfDirectors = parseInt(range4.value);

  const totalTransactions = dealsPerYear * avgBuyersPerList;
  const totalRevenue = totalTransactions * avgFeesPerTransaction;
  const totalExpenses = numOfDirectors * 50000;
  const netProfit = totalRevenue - totalExpenses;
  const roi = (netProfit / totalExpenses) * 100;
  const hoursSaved = dealsPerYear * 8 * 20 * numOfDirectors;
  const additionalRevenue = totalTransactions * 5;

  roiValue.innerText = roi.toFixed(2) + "%";
  hoursSavedValue.innerText = hoursSaved;
  additionalRevenueValue.innerText = "$" + additionalRevenue.toFixed(2);
}