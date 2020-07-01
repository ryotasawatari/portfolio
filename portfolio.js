'use strict';

// const works_panel1 = document.getElementById("works_panel1");
// const works_panel = document.getElementById("works_panel2");
// const works_panel3 = document.getElementById("works_panel3");
// const works_panel4 = document.getElementById("works_panel4");


// const clickEvent = function clickEvent() {
//   let works_panel1 = document.getElementById("works_panel1");
//   if(works_panel1.style.display == "none"){
//     works_panel1.style.display = "block";
//   }else{
//     works_panel1.style.display = "none";
//   }
// }

const openDisplay = document.getElementById("openDisplay");

openDisplay.addEventListener("click",function clickEvent() {
  const works_panel1 = document.getElementById("works_panel1");
  if(works_panel1.style.display == "none"){
    works_panel1.style.display = "block";
  }else{
    works_panel1.style.display = "none";
  }
});