


let sections =document.getElementsByTagName('span')
let aLinkDataLinke=document.getElementsByTagName('li')
let ul = document.createElement('ul');
// header list 
//create the ul first

ul.setAttribute('id', 'proList');// give it id(prolist)
document.getElementById('renderList').appendChild(ul);
//create the li and  a tag and append them to the ul
    for(span of sections){
        let li = document.createElement('li');
        li.setAttribute('class', 'section');// give it class name (section)

 
        let aLink = document.createElement('a')

        li.appendChild(aLink)
        aLink.setAttribute('data-link',span.id)//give each a tag data-link value similar to span id 
        aLink.setAttribute('class','scroll')
        ul.appendChild(li);
        aLink.innerHTML = aLink.innerHTML +span.id;
    }

//scrolling function
const link = document.querySelectorAll(".scroll");
console.log(link);
link.forEach((span) => {
   span.addEventListener("click", () => {
        const el = document.getElementById(span.getAttribute("data-link"));
      el.scrollIntoView({behavior:'smooth' ,block:'start'})
    })
}


)


 function formFunction(){
     alert("thank you for your messag ");

}


//active function 

$(document).ready(function(){
    $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
    });
    });
