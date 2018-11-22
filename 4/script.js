let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let decade = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let hundred = 'hundred', thousand = 'thousand',
    million = 'million', billion = 'billion';

let digitsMK = ['', 'eden', 'dva', 'tri', 'cetiri', 'pet', 'sest', 'sedum', 'osum', 'devet'];
let tensMK = ['deset', 'dvaeset', 'trieset', 'cetirieset', 'pedeset', 'seeset', 'sedumdeset', 'osumdeset', 'deveeset'];
let decadeMK = ['edenaeset', 'dvanaeset', 'trinaeset', 'cetirinaeset', 'petnaeset', 'sesnaeset', 'sedumnaeset', 'osumnaeset', 'devetnaeset'];
let hundredMK = 'sto', thousandMK = 'iljada',
    millionMK = 'milion', billionMK = 'bilion';

window.onload = function(e) {
  let numberInput = document.getElementById('number'),
      submit = document.getElementById('to_string'),
      n2s = document.getElementById('n2s'),
      n2sMK = document.getElementById('n2sMK'),
      number, sn2s = '';


  function parse(n) {
    let sn2s = '';
    let k = n % 100, d = '';
    if((k > 10) && (k < 20)){
      d = decade[(n%10) - 1];
    }
    for(let i = 0; n>0; i++){
      switch(i){
        case 1:
          sn2s += tens[n % 10 - 1];
          break;
        default:
          sn2s += digits[n % 10] + ' ';
      }
      n = Math.floor(n / 10);
    }

    if(d != ''){
      let sa = sn2s.split(" ");
      sa.splice(0, 2, d);
      sn2s = sa.join(" ");
    }
    return sn2s.split(" ").reverse().join(" ").trim();
  }

  function spell(n, s = '') {
    let figures = n.toString().length, t = '';
    switch(figures) {
      case 1:
        s += parse(n);
        break;
      case 2:
        s += parse(n);
        break;
      case 3:
        s += parse(Math.floor(n / 100)) + ' ' + hundred + ' ' + parse(Math.floor(n % 100));
        break;
      case 4:
      case 5:
      case 6:
        t += spell(Math.floor(n % 1000));
        s += spell(Math.floor(n / 1000)) + ' ' + thousand  + ' ' + t;
        break;
      case 7:
      case 8:
      case 9:
        t += spell(Math.floor(n % 1000000));
        s += spell(Math.floor(n / 1000000)) + ' ' + million  + ' ' + t;
        break;
      case 10:
        t += spell(Math.floor(n % 1000000000));
        s += spell(Math.floor(n / 1000000000)) + ' ' + billion  + ' ' + t;
        break;
      default:
        break;
    }

    return s;
  }

  function parseMK(n) {
    let sn2s = '';
    let k = n % 100, d = '';
    if((k > 10) && (k < 20)){
      d = decadeMK[(n%10) - 1];
    }
    for(let i = 0; n>0; i++){
      switch(i){
        case 1:
          sn2s += tensMK[n % 10 - 1];
          break;
        default:
          sn2s += digitsMK[n % 10] + ' ';
      }
      n = Math.floor(n / 10);
    }

    if(d != ''){
      let sa = sn2s.split(" ");
      sa.splice(0, 2, d);
      sn2s = sa.join(" ");
    }
    return sn2s.split(" ").reverse().join(" ").trim();
  }

  function spellMK(n, s = '') {
    let figures = n.toString().length, t = '';
    switch(figures) {
      case 1:
        s += parseMK(n);
        break;
      case 2:
        s += parseMK(n);
        break;
      case 3:
        s += parseMK(Math.floor(n / 100)) + ' ' + hundredMK + ' ' + parseMK(Math.floor(n % 100));
        break;
      case 4:
      case 5:
      case 6:
        t += spellMK(Math.floor(n % 1000));
        s += spellMK(Math.floor(n / 1000)) + ' ' + thousandMK  + ' ' + t;
        break;
      case 7:
      case 8:
      case 9:
        t += spellMK(Math.floor(n % 1000000));
        s += spellMK(Math.floor(n / 1000000)) + ' ' + millionMK  + ' ' + t;
        break;
      case 10:
        t += spellMK(Math.floor(n % 1000000000));
        s += spellMK(Math.floor(n / 1000000000)) + ' ' + billionMK  + ' ' + t;
        break;
      default:
        break;
    }

    return s;
  }

  submit.addEventListener('click', function(e) {
    if(numberInput.value != parseInt(numberInput.value)) {
      alert('digits only');
      return;
    }
    n2s.innerHTML = sn2s = '';
    n = parseInt(numberInput.value);
    sn2s = spell(n);
    n2s.innerHTML = sn2s;
    sn2s = spellMK(n);
    n2sMK.innerHTML = sn2s;
  });
}
