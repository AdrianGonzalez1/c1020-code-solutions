/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance >= 0) {
    this.accounts.push(new Account(this.nextAccountNumber, holder));
  } else if (balance < 0) {
    return null;
  }
};
