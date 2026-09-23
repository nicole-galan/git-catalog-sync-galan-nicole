function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }

  return Math.max(Math.min(Math.round(daysLate * ratePerDay), 20), 1);
}

module.exports = { isValidLoan, calculateLateFee };