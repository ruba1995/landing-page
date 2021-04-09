

//array of the component of the list 
var theHeader = ["About us", "Conntact us", "Our products", "The end"];

// header list 
//create the ul first
var ul = document.createElement('ul');
ul.setAttribute('id', 'proList');// give it id(prolist)
document.getElementById('renderList').appendChild(ul);
theHeader.forEach(rendertheHeader);
//create the li and append them to the ul
function rendertheHeader(element) {
    var li = document.createElement('li');
    li.setAttribute('class', 'item');// give it class name (item)
  
    ul.appendChild(li);
   li.innerHTML =li.innerHTML + element;

   for(var i=0 ; i<=theHeader.length ; i++)
   {
    li.setAttribute('id',element);
   }


}



//scrolling function
const link =document.querySelectorAll(".scroll");
console.log(link);
link.forEach((section)=>{
section.addEventListener("click",()=>{
    const el=document.getElementById(section.getAttribute("data-link"));
    el.scrollIntoView({behavior:"smooth" , block: "start"})
})
}


)





