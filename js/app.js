

//array of the component of the list 
let theHeader = ["section1", "section2", "section3", "section4"];
let sections =document.getElementsByTagName('span')
let aLinkDataLinke=document.getElementsByTagName('li')
let ul = document.createElement('ul');
// header list 
//create the ul first

ul.setAttribute('id', 'proList');// give it id(prolist)
document.getElementById('renderList').appendChild(ul);
//create the li and append them to the ul
    for(span of sections){
        let li = document.createElement('li');
        li.setAttribute('class', 'section');// give it class name (item)
        ul.appendChild(li);
 
        let aLink = document.createElement('a')
    for(li of aLinkDataLinke){
        li.appendChild(aLink)
        aLink.setAttribute('data-link',aLinkDataLinke)
        aLink.setAttribute('class','scroll')
    }
    
    for (let i=-1; i <=theHeader.length; ++i) {

        li.appendChild(aLink)
        aLink.setAttribute('data-link',theHeader[i])
        aLink.setAttribute('class','scroll')

    }
     aLink.innerHTML = aLink.innerHTML +aLinkDataLinke;
}
   // let aLink=document.createElement('a')
    // li.appendChild(aLink)
    //    aLink.innerHTML =aLink.innerHTML + element;
    

    //     // li.setAttribute('id',element);
       
      
       
   







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
