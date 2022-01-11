window.onload = function () {
  let navItems = document.getElementsByClassName("nav-items");
  navItems[0].style.textShadow = "2px 2px 24px rgba(240,240,240,0.7)";
  navItems[0].style.color = "rgba(210,140,101)";

  function removeEffectNav() {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.textShadow = "none";
      navItems[i].style.color = "white";
    }
  }

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function a() {
      removeEffectNav();
      navItems[i].style.textShadow = "2px 2px 24px rgba(240,240,240,0.7)";
      navItems[i].style.color = "rgba(210,140,101)";
    };
  }
};
//163
// .health-bar {
//   background-color: #07d289;
//   width: 190px;
// }
// .bullet-bar {
//   background-color: #fdca77;
//   width: 150px;
// }
// .coin-bar {
//   background-color: #01c3c3;
//   width: 40px;
// }

//19
// let scoreUp = document.getElementById("score-Up");
// let scoreMainStat = document.getElementById("score-main");
// let healthMainStat = document.getElementById("health-stat");
// let bulletMainStat = document.getElementById("bullet-stat");
// let coinMainStat = document.getElementById("coin-stat");

// let healthBar = document.getElementsByClassName("health-bar")[0];
// let bulletBar = document.getElementsByClassName("bullet-bar")[0];
// let coinBar = document.getElementsByClassName("coin-bar")[0];
