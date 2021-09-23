'use  strict '

//  variables  inp
const nameSite = document.getElementById('nameSite');
const siteUrl = document.getElementById('siteUrl');
let container;// array List 
// para name or url 
const para =  document.querySelector('.required-1');
const para1 =  document.querySelector('.required-2');


// if condition (..).... add ArrayList or else (..) not add
if (localStorage.getItem('oursite') != null)
{

    container = JSON.parse(localStorage.getItem('oursite'));
    displayWebsite();
} else
{
    container = [];
}


//  websites  data Additions
function addSite()
{
    let  website = {
        name: nameSite.value,
        url: siteUrl.value
    }
    container.push(website);
    localStorage.setItem('oursite', JSON.stringify(container));

   displayWebsite();
    clearForm();
}

document.getElementById('submit').addEventListener('click', check);


function displayWebsite()
{let  n ;
  let addContent = ``

    for ( n in container)
    {
         addContent += `
            <div  class="d-flex pt-3 justify-content-between " >
                         <h4 class="px-4  text-light">${1+n-10}</h4>

                         <h4 class=" text-light">${container[n].name}</h4>
        <div class="d-flex justify-content-end pe-3">
                        <p class="btn btn-outline-warning  mx-3">  <a href="${container[n].url}" target="_blink">searsh</a></p>

                         <p><button class="btn btn-outline-light" onclick="deleteElmentOfArray(${n})" > Delete</button></p>
        </div>
                 </div> `
    };
    //

    document.getElementById("bodyContent").innerHTML = addContent;
}
//Clear form 

function clearForm()
{
    nameSite.value =""
    siteUrl.value =""
};

// Delete Element Of List
function deleteElmentOfArray(inedx)
{

    container.splice(inedx, 1);
    localStorage.setItem('oursite', JSON.stringify(container));
    displayWebsite();
};

// Check of Name or URL

function check() {
  const choice = nameSite.value;
  const siteUrl1 = siteUrl.value;

  
let rex  = function (){

   let regex= /^\S/
   if (!regex.test(choice)||!regex.test(siteUrl1)) {
      return true
   }else{
       return false
   }
}


  if (choice === ""||rex() ===true ||choice == null||siteUrl1 === "" ||rex() ===true ||siteUrl1 == null) {

    para.classList.add('required-css');
    para1.classList.add('required-css');
            para.textContent=`Name is required`;
            para1.textContent=`URl is required`;
  }
  else{         
     para.classList.remove('required-css');
     para1.classList.remove('required-css');
           para1.textContent=``;
           para.textContent=``;
         addSite();    

};
}





// add keyboard 
document.addEventListener("keydown" ,function(e){

    if(e.key=='Enter'){
check();

    }
})