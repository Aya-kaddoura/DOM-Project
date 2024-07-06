// Head Elemeants
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
//Head Styling
myHeader.style.cssText="background-color : #fff ; color : #6b828f ;display : flex ;justify-content: space-between; " ;
myLogo.style.cssText = "display: inline-block;margin-left: 10px;color: #00ff40"
myMenu.style.cssText = "display: inline-block;margin:auto 10px"

document.body.style.fontFamily = '"Poppins", Arial, sans-serif';
document.body.style.backgroundColor = "#eee";
document.body.style.margin = 0
document.body.style.padding = 0;

myHeader.appendChild(myLogo);
myHeader.appendChild(myMenu);
document.body.appendChild(myHeader);

