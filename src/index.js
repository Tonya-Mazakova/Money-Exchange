// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if(currency === null || currency < null){
        return {}
    }
    else if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    var change = {},
        i = 0,
        coins = [50, 25,10,5, 1],
        keys = ["H","Q","D","N","P"],
        key,
        coin;

    while (currency) {
        coin = coins[i];
        key = keys[i];
        if (currency >= coin) {
                change[key] = Math.floor(currency / coin);
                currency %= coin;
        }
        i++
    }
    return change;
};
