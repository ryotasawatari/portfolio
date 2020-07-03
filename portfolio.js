'use strict';

// 制作実績詳細の開閉

const works_panel1 = document.getElementById("works_panel1");
const works_panel2 = document.getElementById("works_panel2");
const works_panel3 = document.getElementById("works_panel3");
const works_panel4 = document.getElementById("works_panel4");

function click1() {
  works_panel2.style.display = "none"
  works_panel3.style.display = "none"
  works_panel4.style.display = "none"

  if (works_panel1.style.display == "block") {
    works_panel1.style.display = "none"
  } else {
    works_panel1.style.display = "block"
  }
}

function click2() {
  works_panel1.style.display = "none"
  works_panel3.style.display = "none"
  works_panel4.style.display = "none"

  if (works_panel2.style.display == "block") {
    works_panel2.style.display = "none"
  } else {
    works_panel2.style.display = "block"
  }
}

function click3() {
  works_panel1.style.display = "none"
  works_panel2.style.display = "none"
  works_panel4.style.display = "none"

  if (works_panel3.style.display == "block") {
    works_panel3.style.display = "none"
  } else {
    works_panel3.style.display = "block"
  }
}

function click4() {
  works_panel1.style.display = "none"
  works_panel2.style.display = "none"
  works_panel3.style.display = "none"

  if (works_panel4.style.display == "block") {
    works_panel4.style.display = "none"
  } else {
    works_panel4.style.display = "block"
  }
}

// レスポンシブ用メニュー

$(function() {
  $(".menu_list").css("display","none");
  $(".menu_btn").on("click", function() {
      $(".menu_list").slideToggle('slow');
  });
});