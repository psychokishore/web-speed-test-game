  var ext = localStorage.getItem("user");
  array = JSON.parse(localStorage.getItem("array"));

function shuffle(ar) {
  var currentIndex = ar.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = ar[currentIndex];
    ar[currentIndex] = ar[randomIndex];
    ar[randomIndex] = temporaryValue;
  }
  return ar;
}
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
shuffle(arr);
for (var i = 0; i < arr.length; i++) {
document.getElementById(i+1).innerHTML=arr[i];
}

var t = document.getElementById("time").innerHTML;

var noc=1;
function clicked(val)
{ 
  var n=document.getElementById(val).innerHTML;
  if(noc==n)
  {
    noc++;
    if(n<21)
    {
      n=Number(n)
      n=n+20;
    }
    else
    {
      n=" ";
    }
    document.getElementById(val).innerHTML=n;
  }
  else
  {
    alert("Click correct number to proceed");
  }
  
  if (noc==41) 
  {
    clearInterval(counter);
    array.push([ext,JSON.parse(document.getElementById("time").innerHTML)]);
    var sorting=[];
    for (var i = array.length - 1; i >= 0; i--) {
    sorting[i]=array[i][1];
    }
    sorting.sort();
    var result=[];
    result = array.map(function(item) {
      var n = sorting.indexOf(item[1]);
      sorting[n] = '';
      return [n, item]
    }).sort().map(function(j) { return j[1] });
  array=result;
  while(array.length>5){
  array.pop();
  }
  localStorage.setItem("array", JSON.stringify(array));
  array = JSON.parse(localStorage.getItem("array"));
  alert("Match Finished!");
  location.reload();
  }

  if (noc==2) {
  var count=0;
  var counter=setInterval(timer, 100); 
  function timer()
  {
    count=count+0.1;
    t=count;
    document.getElementById("time").innerHTML=count;
  }
 }
}
function highscore()
  {
    alert("Name,Score:"+"\n"+array[0]+"\n"+array[1]+"\n"+array[2]+"\n"+array[3]+"\n"+array[4]);
  }



