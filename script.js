const email=document.querySelector("#email");
const icon1=document.querySelector(".icon1");
const icon2=document.querySelector(".icon2");
const error=document.querySelector(".error");
const btn=document.querySelector("button");

let regExp=/^[^ ]+@[^ ]+\.[a-z]{2,5}$/;

function check(){
    if(email.value.match(regExp)){
        email.style.borderColor="#005319";
        error.style.display="none";
        btn.style.display="block";
        icon2.style.display="block";
        icon1.style.display="none";
    }else{
     email.style.borderColor="red";
     error.style.display="block";
     btn.style.display="none";
     icon1.style.display="block";
     icon2.style.display="none";
    }
    if(email.value==""){
        email.style.borderColor="lightgrey";
        error.style.display="none";
        btn.style.display="none";
        icon2.style.display="none";
        icon1.style.display="none";
    }
}