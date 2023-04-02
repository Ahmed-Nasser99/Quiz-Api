import { Settings } from "./settings.js";
let settings = new Settings();

$("#your-element").particleground();
document.addEventListener(
  "DOMContentLoaded",

  function canvasColor() {
    let color = "#5cbdaa";
    $(".toggle").click(() => {
      $("body").toggleClass("bg-dark");
      $(".text-spec").toggleClass("changeColor");
      $(".bg-spec").toggleClass("changeColor");
      if (color == "#5cbdaa") {
        color = "#653383";
      } else {
        color = "#5cbdaa";
      }
      particleground(document.getElementById("particles"), {
        dotColor: color,
        lineColor: color,
      });
      var intro = document.getElementById("intro");
      intro.style.marginTop = -intro.offsetHeight / 2 + "px";
    });
    console.log(color);
    particleground(document.getElementById("particles"), {
      dotColor: color,
      lineColor: color,
    });
    var intro = document.getElementById("intro");
    intro.style.marginTop = -intro.offsetHeight / 2 + "px";
  },
  false
);
