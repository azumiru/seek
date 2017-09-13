
var defaultPricing = {
  'classic': 269.99,
  'standout': 322.99,
  'premium': 394.99
}

var unileverPricing = {
  'classic': 269.99,
  'standout': 322.99,
  'premium': 394.99
}

var applePricing = {
  'classic': 269.99,
  'standout': 322.99,
  'premium': 394.99
}

var nikePricing = {
  'classic': 269.99,
  'standout': 322.99,
  'premium': 394.99
}

function checkout(price) {
  this.firstAd = price['classic'];
  this.secondAd = price['standout'];
  this.thirdAd = price['premium'];

  this.add = function() {
    this.firstAd + this.secondAd + this.thirdAd;
  }

  this.total = function() {
    var totalAd1 = document.getElementById('ad1');
    var totalAd2 = document.getElementById('ad2');
    var totalAd3 = document.getElementById('ad3');

    return (this.firstAd * totalAd1)  + (this.secondAd * totalAd2) + (this.thirdAd * totalAd3);
  }
}

function calc() {
  var co = new checkout(defaultPricing);
  document.getElementById('total').innerHTML = '$' + co.total();
}

function init() {
  //var e = document.getElementById('customer');
  //var customer = e.options[e.selectedIndex].value;
  //console.log(e);
}

document.onload = init();
