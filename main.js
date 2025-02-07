const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const imageFour = document.querySelector(".image-4");
const imageFive = document.querySelector(".image-5");
const imageSix = document.querySelector(".image-6");

const imageHeader = document.getElementById("header-img");
const containerTwo = document.getElementById("center-container");
const containerThree = document.getElementById("center-container2");
const containerFour = document.getElementById("center-container3");
const containerFive = document.getElementById("center-container4");

const textTwo = document.getElementById("text2");
const textFive = document.getElementById("text5");

const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const btnYes2 = document.querySelector(".btn-yes2");
const btnNo2 = document.querySelector(".btn-no2");

const textBox = document.getElementById("text");

const fit1 = document.querySelector(".cursor-pointer-1");
const fit2 = document.querySelector(".cursor-pointer-2");
const fit3 = document.querySelector(".cursor-pointer-3");


let answers = [];
let yes_counter = 0;

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

function showElementForFiveSeconds(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = "block"; // Show the element
  
    setTimeout(() => {
      element.style.display = "none"; // Hide the element after 5 seconds
    }, 5000);
  }

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
    if (yes_counter == 0) {
        document.querySelector(".first-text").classList.add("hide");
        document.querySelector(".second-text").classList.remove("hide");
        document.querySelector(".image-1").classList.remove("hide");
        yes_counter++;

    } else if (yes_counter == 1) {
        document.querySelector(".second-text").textContent = "Are you sure?";
        yes_counter++;

    } else if (yes_counter == 2) {
        document.querySelector(".second-text").textContent = "Are you sure??? No takebacks";
        yes_counter++;

    } else {
        document.querySelector(".second-text").classList.add("hide");

        btnNo.classList.add("hide");
        btnYes.classList.add("hide");
        imageOne.classList.add("hide");
        imageTwo.classList.remove("hide");
        imageThree.classList.remove("hide");
        imageFour.classList.remove("hide");
        
        setTimeout(() => {
          imageTwo.classList.add("hide");
          imageThree.classList.add("hide");
          imageFour.classList.add("hide");
        
        }, 3500);
        
        setTimeout(() => {
          containerTwo.style.display = "block";
        }, 4500);
        
        setTimeout(() => {
          imageFive.classList.remove("hide");
          btnYes2.classList.remove("hide");
          btnNo2.classList.remove("hide");
        }, 5500);
    }
});


btnNo2.addEventListener("mouseover", (event) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;
  
    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
      newTop = getRandomNumber(0, containerHeight - btnHeight);
    }
  
    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
      newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }
  
    btnNo2.style.top = Math.floor(newTop) + "px";
    btnNo2.style.left = Math.floor(newLeft) + "px";

});

btnYes2.addEventListener("click", (e) => {
    containerTwo.style.display = "none";
    
    setTimeout(() => {
        containerThree.style.display = "block";
      }, 1000);

      setTimeout(() => {
        imageSix.classList.remove("hide");
      }, 1500);

      setTimeout(() => {
        containerThree.style.display = "none";
        containerFour.style.display = 'flex';
      }, 3000);

      setTimeout(() => {
        textFive.classList.remove("hide");
      }, 3500);

      setTimeout(() => {
        fit1.classList.remove("hide");
        fit2.classList.remove("hide");
        fit3.classList.remove("hide");
        

      }, 4500);


  });