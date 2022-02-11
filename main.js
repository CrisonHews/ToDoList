
// Add all your JS here
console.log("work");
const div = document.querySelector(".div");
var tasklist;
function addItem(){

  input = prompt("Include The Name Of The Task");

    if(input.trim()!=0){
      let localitems = JSON.parse(localStorage.getItem("localitems"));
      if(localitems===null){
        tasklist =[];
      }
      else{
        tasklist = localitems;
      }
      tasklist.push(input);
      localStorage.setItem("localitems",JSON.stringify(tasklist));
      show();
    
}
}

function show(){
  let localitems = JSON.parse(localStorage.getItem("localitems"))
  if (localitems === null) {
    tasklist = [];
  }
  else {
    tasklist = localitems;
  }
let ele = '';
item = document.querySelector(".div");
  tasklist.forEach((data,index)=>{
    ele += `<span><h4 class="task" onclick= "dlt(${index})">•${data}</h4></span><br>`;
  }) 
  item.innerHTML = ele;
}
show();

function dlt(index){
let ans =   confirm("Are You Sure You Want To Delete");
if(ans===true){
  let localitems = JSON.parse(localStorage.getItem("localitems"));
  tasklist.splice(index, 1);
  localStorage.setItem('localitems',JSON.stringify(tasklist));
  show();
}
}