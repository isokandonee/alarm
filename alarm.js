var a = new Audio("sound/scream.mp3");
var himi = h.value, mimi = m.value, simi = s.value;
var    him = hi.value, mim = mi.value, sim = si.value;
function time()
{
    var d = new Date();
    h.value = d.getHours();
    m.value = d.getMinutes();
    s.value = d.getSeconds();
 

  setInterval(time,1000);
  if (hi.value == h.value && mi.value == m.value && si.value == s.value) 
    {
        a.play();
        // alert("It's Time");
    }
}
// function alarm()
// {
//    // him = "";
//    // mim = "";
//    // sim = ""; 
//    // document.getElementById("div").innerHTML += hi.value + ":" + mi.value + ":" + si.value;
   
   
//     // alert(him + " " + mim);
// }
function snooze()
{
    a.pause();
    // mim = mim + 5;
    // mim = mi.value;
// // start();
    // a.play();
}
function refresh()
{
    hi.value = "";
    mi.value = "";
    si.value = "";
}