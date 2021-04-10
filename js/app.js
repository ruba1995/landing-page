

//array of the component of the list 
var theHeader = ["section1", "section2", "section3", "section4"];

// header list 
//create the ul first
var ul = document.createElement('ul');
ul.setAttribute('id', 'proList');// give it id(prolist)
document.getElementById('renderList').appendChild(ul);
theHeader.forEach(rendertheHeader);
//create the li and append them to the ul
function rendertheHeader(element) {
    var li = document.createElement('li');
    li.setAttribute('class', 'section');// give it class name (item)

    ul.appendChild(li);
    // li.innerHTML = li.innerHTML + element;

    // var aLink=document.createElement('a')
    // li.appendChild(aLink)
    //    aLink.innerHTML =aLink.innerHTML + element;
    var aLink = document.createElement('a')
    for (var i = 0; i <= theHeader.length; i++) {
        // li.setAttribute('id',element);
       
        li.appendChild(aLink)
        aLink.setAttribute('data-link',element)
        aLink.setAttribute('class','scroll')
       
    }
 
    aLink.innerHTML = aLink.innerHTML + element;
}





//scrolling function
const link = document.querySelectorAll(".scroll");
console.log(link);
link.forEach((section) => {
   section.addEventListener("click", () => {
        const el = document.getElementById(section.getAttribute("data-link"));
      el.scrollIntoView({behavior:'smooth' ,block:'start'})
    })
}


)


 function formFunction(){
     alert("thank you for your messag ");

}





