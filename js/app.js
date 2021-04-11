

//array of the component of the list 
var theHeader = ["section1", "section2", "section3", "section4"];



// header list 
//create the ul first
let ul = document.createElement('ul');
ul.setAttribute('id', 'proList');// give it id(prolist)
document.getElementById('renderList').appendChild(ul);
theHeader.forEach(rendertheHeader);
//create the li and append them to the ul
function rendertheHeader(element) {
    let li = document.createElement('li');
    li.setAttribute('class', 'section');// give it class name (item)

    ul.appendChild(li);
    // li.innerHTML = li.innerHTML + element;

    // let aLink=document.createElement('a')
    // li.appendChild(aLink)
    //    aLink.innerHTML =aLink.innerHTML + element;
    let aLink = document.createElement('a')
    for (let i = 0; i <= theHeader.length; i++) {
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



$(document).ready(function(){
    $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
    });
    });
