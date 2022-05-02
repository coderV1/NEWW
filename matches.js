// write js code here corresponding to matches.html

var added=(JSON.parse(localStorage.getItem("schedule")))||[]


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
btn.innerText="Add To Favorits"
btn.addEventListener("click",function(){
    addToF()
})
tr.append(td1,td2,td3,td4,td5,btn)
document.querySelector("tbody").append(tr)
});

function addToF(){
    localStorage.setItem("favourites",JSON.stringify(added))
console.log(JSON.parse(localStorage.getItem))

}

