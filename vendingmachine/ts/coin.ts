class Quarter {
    private value: number = .25;

    get Value() {
        return this.value;
    }

    set Value(newValue: number) {
        this.value = newValue;
    }

    getImageURL (): string {
        return "img/quarter.png";
    }
}

var coin = new Quarter();
var value = coin.Value;
coin.Value = 25;