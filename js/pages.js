/*jshint esversion: 6 */

//whe I click the next button//
//show a new page//

//each page should show a differrent background colour, circle color and content

//when I click the previous button//
//show the previous page//

//when I click the random button//
//show a random page//

//when I press a key//
//show the next or previous page//

//step 1: add the content for our pages//

const pages = [{
    content: "Build Me Up Buttercup by The Foundations!",
    circle: "#525d2c",
    background: "linear-gradient(0deg, rgba(189, 255, 181, 1) 0%, rgba(252, 210, 134, 1) 100%)"
  },
  {
    content: "Build Me Up Buttercup by The Foundations!",
    circle: "#8b4000",
    background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
  },
  {
    content: "is based in London",
    circle: "#5a130c",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  },
  {
    content: `letting you <a href="cv.pdf">download her cv</a>`,
    circle: "#660033",
    background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
  }
];

//step 2 get reference to the tags: circle, H2, buttons, bodytag >> save in const
const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
const nextTag = document.querySelector(".fa-arrow-right");
const previousTag = document.querySelector(".fa-arrow-left");
const randomTag = document.querySelector(".fa-sync-alt");
const h2Tag = document.querySelector("h2");

//step 3 create a page tracker - we need to know which page we are on in order to know what page we are on.

let pageNumber = 0;

//step 4 create an action that increases the page number

const next = function() {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
};

//we only have 4 pages - so we can only go to page no 3.

//step 5 create an action that decreases the pageNumber. x

const previous = function() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};

//step 6: when random is selected, a random page number is selected

const random = function() {
  // create a random page number
  pageNumber = Math.floor(Math.random() * pages.length);
};

// step 10 : update content to match that from the contents
const updatePage = function() {
  h2Tag.innerHTML = pages[pageNumber].content;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.background = pages[pageNumber].background;

};

//Step 7: Attach an eventListener to the next/previous function

nextTag.addEventListener("click", function() {
  next();
  console.log(pageNumber);
  updatePage();
});

previousTag.addEventListener("click", function() {
  previous();
  console.log(pageNumber);
  updatePage();
});

randomTag.addEventListener("click", function() {
  random();
  console.log(pageNumber);
  updatePage();
});
