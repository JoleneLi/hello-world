var myHeading = document.querySelector('h1');
myHeading.textContent = 'Dopey the Bunny';


var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dopey_1.gif'){
        myImage.setAttribute('src','images/dopey_facewashing.gif');
    }else{
        myImage.setAttribute('src','images/dopey_1.gif');
    }
}


var myButton = document.querySelector('button');
var myWelcomeMessage = document.querySelector('p#welcome');

function setUserName(){
    var myName = prompt ('Please enter your name.');
    localStorage.setItem('name',myName);
    myWelcomeMessage.textContent = 'Hi ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myWelcomeMessage.textContent = 'Hi ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}