// write js code here corresponding to index.html
// You should add submit event on the form

var form=document.querySelector("form")
var addedarr=[]
form.addEventListener("submit",add)

function add(){
    
    event.preventDefault();
    var Matnum=form.matchNum.value;
    var teama=form.teamA.value;
    var teamb=form.teamB.value;
    var date=form.date.value;
    var venue=form.venue.value;

    var objadd={
        Matnum:Matnum,
        teama:teama,
        teamb:teamb,
        date:date,
        venue:venue,


    }
    addedarr.push(objadd)
   localStorage.setItem("schedule",JSON.stringify(addedarr) )
    console.log(objadd)
} 
