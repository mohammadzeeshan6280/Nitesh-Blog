var mobNavToggler = document.querySelector(".open-menu");
var mobNavigation = document.querySelector("#navigation");

function openMobNav() {
  var barO = document.getElementById("bar1");
  var barT = document.getElementById("bar2");
  var barTh = document.getElementById("bar3");

  if (mobNavigation.style.top === "-50%" || mobNavigation.style.top === "") {
    mobNavigation.style.top = "0";
    barO.style.position = "absolute";
    barO.style.top = "6px";
    barO.style.transform = "rotate(45deg)";
    barT.style.visibility = "hidden";
    barTh.style.position = "absolute";
    barTh.style.top = "6px";
    barTh.style.transform = "rotate(-45deg)";
  } else {
    mobNavigation.style.top = "-50%";
    barO.style.position = "static";
    barO.style.top = "0";
    barO.style.transform = "rotate(0)";
    barT.style.visibility = "visible";
    barTh.style.position = "static";
    barTh.style.top = "12px";
    barTh.style.transform = "rotate(0)";
  }
}
