
var pricing = {
  'default': {
    'classic': 269.99,
    'standout': 322.99,
    'premium': 394.99
  },
  'unilever': {
    'classic': 269.99,
    'standout': 322.99,
    'premium': 394.99
  },
  'apple': {
    'classic': 269.99,
    'standout': 322.99,
    'premium': 394.99
  },
  'nike': {
    'classic': 269.99,
    'standout': 322.99,
    'premium': 394.99
  }
}

function checkout(cust) {
  var totalAd1 = document.getElementById('ad1').value;
  var totalAd2 = document.getElementById('ad2').value;
  var totalAd3 = document.getElementById('ad3').value;

  switch (cust) {
    case 'unilever':
      this.firstAd = pricing.unilever.classic;
      this.secondAd = pricing.default.standout;
      this.thirdAd = pricing.default.premium;
      break;
    default:
      this.firstAd = pricing.default.classic;
      this.secondAd = pricing.default.standout;
      this.thirdAd = pricing.default.premium;
  }

  this.total = function() {
    return (this.firstAd * totalAd1)  + (this.secondAd * totalAd2) + (this.thirdAd * totalAd3);
  }
}

function calc() {
  var co = new checkout('default');
  document.getElementById('total').innerHTML = '$' + parseFloat(Math.round(co.total() * 100) / 100).toFixed(2);
}

function init() {
  //var e = document.getElementById('customer');
  //var customer = e.options[e.selectedIndex].value;
  //console.log(e);
}

document.onload = init();
