function Solve(val) {
    var v = document.getElementById('inp');
    v.value += val;
 }
 function calculate()
  {
   try {
     document.getElementById('inp').value = eval(document.getElementById('inp').value);
   }
    catch (error) {
     document.getElementById('inp').value = 'Error';
   }
 }
 function blank() {
    var inp = document.getElementById('inp');
    inp.value = '';
 }
 