// write js code here corresponding to favourites.html
var added=(JSON.parse(localStorage.getItem("favourites")))



    added.forEach(function(elem){
   
var tr=document.createElement("tr");

var td1=document.createElement("td")
td1.innerText=elem.Matnum
var td2=document.createElement("td")
td2.innerText=elem.teama
var td3=document.createElement("td")
td3.innerText=elem.teamb
var td4=document.createElement("td")
td4.innerText=elem.date
var td5=document.createElement("td")
td5.innerText=elem.venue
var btn=document.createElement("button")
btn.innerText="Remove"
btn.addEventListener("click",function(){
    addToF()
})
tr.append(td1,td2,td3,td4,td5,btn)
document.querySelector("tbody").append(tr)
});
function addToF(){
    event.target.parentNode.remove();
}



