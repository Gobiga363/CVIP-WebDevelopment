const ipbox=document.getElementById("ipbox");
const liContainer=document.getElementById("liContainer");
function doTask(){
   if(ipbox.value === ''){
    alert("Please type your task !");
   }
   else{
    let list=document.createElement("li");
    list.innerHTML=ipbox.value;
    liContainer.appendChild(list);
    let span=document.createElement("span");
    span.innerHTML="\u274c";
    list.appendChild(span);
   }
   ipbox.value="";
   storeData();
}
liContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        storeData();
    }

}, false);

function storeData(){
    localStorage.setItem("data",liContainer.innerHTML);
}
function showData(){
    liContainer.innerHTML=localStorage.getItem("data");
}
showData();