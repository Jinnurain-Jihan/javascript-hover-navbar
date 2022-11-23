let smartPhone=document.getElementById("smartphone");
let smartPhoneText=document.getElementById("smartphonetext");
let news=document.getElementById("news");
let newsText=document.getElementById("newstext");
smartPhone.onmouseover=function (){
    smartPhoneText.style.display="block";
    newsText.style.display="none";
}
news.onmouseover=function (){
    smartPhoneText.style.display="none";
    newsText.style.display="block";
}