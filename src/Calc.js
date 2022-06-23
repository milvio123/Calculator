$( document ).ready(function() {


var valsarr = []
var isclicked = false;
var numbclicks = 0;
// var numbval;
function click() {
    if(isclicked==false) {
        valsarr.push(this.value)
  }
}  


var buttonval;
var totalvals = []
var totalsums = []
var addval ;
var addclicks = 0;


function addclickcounter() {
  isclicked = true
  addval = valsarr.join('')
    while(valsarr.length > 0) {
      valsarr.pop();
  }
  addclicks+=1
  buttonval = addval
  totalvals.push(buttonval)
  isclicked = false
}

var multclicks = 0;
function multclickcounter() {
isclicked = true
addval = valsarr.join('')
while(valsarr.length > 0) {
    valsarr.pop();
}
multclicks+=1
buttonval = addval
totalvals.push(addval)
isclicked = false

}

var divclicks = 0;
function divclickcounter() {
isclicked = true
addval = valsarr.join('')
while(valsarr.length > 0) {
    valsarr.pop();
}
divclicks+=1
buttonval = addval
totalvals.push(addval)
isclicked = false

}

var subclicks = 0;
function subclickcounter() {
isclicked = true
addval = valsarr.join('')
while(valsarr.length > 0) {
    valsarr.pop();
}
subclicks+=1
buttonval = addval
totalvals.push(addval)
isclicked = false

}

var sum;
var multsum;
var divsum;
var subsum;
var equalval;
var firstNumb;
var secondNumb;

function finalres() {
isclicked = false;
equalval = valsarr.join('')
while(valsarr.length > 0) {
    valsarr.pop();
}
buttonval = equalval
totalvals.push(equalval)
if(addclicks==1) {

if(typeof sum=='undefined' && typeof multsum == 'undefined' && typeof divsum == 'undefined' && typeof subsum == 'undefined') {
firstNumb = parseFloat(totalvals[0])
secondNumb = parseFloat(totalvals[1])
sum = secondNumb + firstNumb;
totalsums.push(sum)
alert(sum)
}
else {
sum = parseFloat(totalvals[totalvals.length-1]);
sum+=parseFloat(totalsums[totalsums.length-1])
totalsums.push(sum)  
alert(sum)
}
addclicks=0;
}


if(multclicks==1) {

if(typeof multsum == 'undefined'&& typeof sum == 'undefined' && typeof divsum == 'undefined' && typeof subsum == 'undefined') {
firstNumb = parseFloat(totalvals[0])
secondNumb = parseFloat(totalvals[1])
multsum = secondNumb * firstNumb;
totalsums.push(multsum)  
alert(multsum)
}
else {
multsum = parseFloat(totalvals[totalvals.length-1]);
multsum*=parseFloat(totalsums[totalsums.length-1])
totalsums.push(multsum)  
alert(multsum)

}
multclicks=0;
}


if(divclicks==1) {

if(typeof divsum == 'undefined' && typeof sum == 'undefined' && typeof multsum == 'undefined' && typeof subsum == 'undefined') {
firstNumb = parseFloat(totalvals[0])
secondNumb = parseFloat(totalvals[1])
divsum = firstNumb/secondNumb;
totalsums.push(divsum)  
alert(divsum)  
}

else {
divsum = parseFloat(totalsums[totalsums.length-1]);
divsum/=parseFloat(totalvals[totalvals.length-1])
totalsums.push(divsum) 
alert(divsum)  

}
divclicks=0;
}

if(subclicks==1) {

if(typeof divsum == 'undefined' && typeof sum == 'undefined' && typeof multsum == 'undefined' && typeof subsum == 'undefined') {
firstNumb = parseFloat(totalvals[0])
secondNumb = parseFloat(totalvals[1])
subsum = secondNumb-firstNumb;
totalsums.push(subsum)  
alert(subsum)  

}

else {
subsum = parseFloat(totalsums[totalsums.length-1]);
subsum-=parseFloat(totalvals[totalvals.length-1])
totalsums.push(subsum)  
alert(subsum)  
}
subclicks=0;
}
}

function clearfunc() {

 valsarr = []
 totalvals = []
 totalsums = []
 isclicked = false;
 numbclicks = 0;
//  numbval = undefined;
 buttonval  = undefined;
 addval  = undefined;
 sum  = undefined;
 multsum  = undefined;
 divsum  = undefined;
 subsum  = undefined;
 equalval = undefined ;
 firstNumb  = undefined;
 secondNumb  = undefined;
 multclicks = 0;
 divclicks = 0;
 subclicks = 0;
 addclicks = 0;

}


document.getElementById("addbutton").addEventListener("click", addclickcounter);
document.getElementById("multbutton").addEventListener("click", multclickcounter);
document.getElementById("divbutton").addEventListener("click", divclickcounter);
document.getElementById("subutton").addEventListener("click", subclickcounter);
document.getElementById("equalbutton").addEventListener("click", finalres);
document.getElementById("clear").addEventListener("click", clearfunc);
document.getElementById("0").addEventListener("click", click);
document.getElementById("1").addEventListener("click", click);
document.getElementById("2").addEventListener("click", click);
document.getElementById("3").addEventListener("click", click);
document.getElementById("4").addEventListener("click", click);
document.getElementById("5").addEventListener("click", click);
document.getElementById("6").addEventListener("click", click);
document.getElementById("7").addEventListener("click", click);
document.getElementById("8").addEventListener("click", click);
document.getElementById("9").addEventListener("click", click);
});