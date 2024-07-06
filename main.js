// Head
let myHeader = document.createElement("header");
let myLogo = document.createElement("h1");
let myMenu = document.createElement("ul");
let menuItems = myMenu.childNodes;
let menuContent = ['Home' , 'about' , 'services' , 'content'];

myLogo.textContent = "ELZERO"
for(let i=0 ; i < 4 ; i++){
    let listItem = document.createElement("li");
    myMenu.appendChild(listItem)
    menuItems[i].textContent = menuContent[i];
    menuItems[i].style.cssText = "display : inline; margin : 5px";
}
myHeader.style.cssText="background-color : #fff ; color : #6b828f ;display : flex ;justify-content: space-between; " ;
myLogo.style.cssText = "display: inline-block;margin-left: 10px;color: #008040"
myMenu.style.cssText = "display: inline-block;margin:auto 10px"

document.body.style.fontFamily = '"Poppins", Arial, sans-serif';
document.body.style.backgroundColor = "#eee";
document.body.style.margin = 0
document.body.style.padding = 0;

myHeader.appendChild(myLogo);
myHeader.appendChild(myMenu);
document.body.appendChild(myHeader);

//Content
let myContent = document.createElement("div");
myContent.className = "content";
contentItems = myContent.childNodes;

for(let i = 0 ; i < 15 ; i++){
    let myproduct = document.createElement("div");
    let mySpan = document.createElement("span");
    myproduct.className = "product";
    myContent.appendChild(myproduct);
    myproduct.appendChild(mySpan);
    mySpan.textContent = `${i+1}`;
    let textNode = document.createTextNode("product");
    myproduct.appendChild(textNode);

    mySpan.style.cssText = "display : block ; margin-bottom : 10px ; margin-top : 10px ; font-Size : 40px ; color : #000";
    contentItems[i].style.cssText = "width : 27% ; background-color : #fff;text-align : center;padding : 20px ; color: #008040";
}

myContent.style.cssText = "display : flex ; flex-wrap : wrap; justify-content : center; gap : 20px; box-size : border-box ; margin-top : 20px ; margin-bottom : 20px"

document.body.appendChild(myContent);

//Footer
let myFooter = document.createElement("footer");
myFooter.className = "footer";
let textFooter = document.createTextNode("Copyright 2021");
myFooter.appendChild(textFooter);
myFooter.style.cssText = "background-color : #008040 ; color : #fff ; text-align : center ; font-size : 26px ; padding : 20px";

document.body.appendChild(myFooter);