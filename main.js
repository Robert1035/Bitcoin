// var xmlhttp = new XMLHttpRequest();
// var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4  &&  this.status == 200) {
//         var json = JSON.parse(this.responseText);
//         parseJson(json);
//     }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();
// function parseJson(json) {
//     var time = "<b>Last Updated : " + json["time"]["updated"] + "</b>";
//     var usdValue = "1 BTC equals to $" + json["bpi"]["USD"]["rate"];
//     var gbpValue = "1 BTC equals to &pound;" + json["bpi"]["GBP"]["rate"];
//     var euroValue = "1 BTC equals to &euro;" + json["bpi"]["EUR"]["rate"];
//     document.getElementById("data").innerHTML = time +
//         "<br /><br />" + usdValue +
//         "<br />" + gbpValue +
//         "<br />" + euroValue;
//
// }

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
function parseJson(json) {
    let time = "<b>Last Updated : " + json["time"]["updated"] + "</b>";
    let usdValue = "1 BTC equals to $" + json["bpi"]["USD"]["rate"];
    let gbpValue = "1 BTC equals to £" + json["bpi"]["GBP"]["rate"];
    let euroValue = "1 BTC equals to €" + json["bpi"]["EUR"]["rate"];
    document.getElementById("data").innerHTML = time +
        "<br /><br />" + usdValue +
        "<br />" + gbpValue +
        "<br />" + euroValue;
}
fetch(url)
    .then(response => response.json())
    .then(result => parseJson(result))
    .catch(err => alert(err));