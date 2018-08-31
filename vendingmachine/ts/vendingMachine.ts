/// <reference path="./coin.ts" />


var coin = new Quarter();
var value = coin.Value;

class VendingMachine {
    private paid = 0;
    acceptCoin = (coin: Quarter): void => {
        this.paid += coin.value;
        var element = document.getElementById("total")
        element.innerHTML = this.paid.toString()
    }
}

