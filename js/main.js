// 
const languageA = document.querySelector("#language");
const iconDown = document.querySelector("#language i");
const changeLanguages = document.getElementById("edit-lang");
// 
const myMain = document.querySelector("main");
const myFooter = document.querySelector("footer");
const myBar = document.getElementById("bar");
const barContent = document.querySelector(".bar-content");
const btnExit = document.querySelector(".fa-xmark");
const myHeader = document.querySelector("header");
const orderBtn = document.getElementById("order");

//Start  Click Menu in +1200px
const menuA = document.querySelector("#menu");
const editeMunu = document.querySelector("#edit-menu");
const iconDown2 = document.querySelector("#menu i");

menuA.addEventListener("click", () => {
  iconDown2.classList.toggle("myrotate");
  if (iconDown2.classList.contains("myrotate")) {
    editeMunu.style.display = "block";
    menuA.style.fontWeight = "bold";
  } else if (!iconDown2.classList.contains("myrotate")) {
    editeMunu.style.display = "none";
    menuA.style.fontWeight = "400";
  }
});
//End  Click Menu in +1200px

// Start Bar Show Menu
const showMenunBar = document.querySelector("#showmenuinbar");
const showMenunBarMinus = document.querySelector("#showmenuinbar .fa-minus");
const menuAll = document.querySelector("#edit-menu-all");

showMenunBar.addEventListener("click", (e) => {
  const x = e.currentTarget.parentElement;
  x.classList.toggle("show-me");
  if (x.classList.contains("show-me")) {
    showMenunBarMinus.style.color = "#292929";
    document.body.style.overflow = "auto";
  } else {
    showMenunBarMinus.style.color = "transparent";
    showMenunBarMinus.style.marginTop = "2px";
    document.body.style.overflow = "hidden";
  }
});
// End Bar Show Menu

// Start Bar Show Language
const showLangBar = document.querySelector("#showlanginbar");
const showLangBarMinus = document.querySelector("#showlanginbar .fa-minus");
const langAll = document.querySelector("#edit-lang-all");

showLangBar.addEventListener("click", (e) => {
  const y = e.currentTarget.parentElement;
  y.classList.toggle("showww");
  if (y.classList.contains("showww")) {
    showLangBarMinus.style.color = "#292929";
    document.body.style.overflow = "auto";
  } else {
    showLangBarMinus.style.color = "transparent";
    showLangBarMinus.style.marginTop = "2px";
    document.body.style.overflow = "hidden";
  }
});
// End Bar Show Language

// Start  Click Languges in +1200px
languageA.addEventListener("click", () => {
  iconDown.classList.toggle("myrotate");
  if (iconDown.classList.contains("myrotate")) {
    changeLanguages.style.display = "block";
    editeMunu.style.display = "none";
    menuA.style.fontWeight = "400";
    iconDown2.classList.remove("myrotate");
  } else if (!iconDown.classList.contains("myrotate")) {
    changeLanguages.style.display = "none";
  }
});
// End  Click Languges in +1200px


// Editting When i Click in BAR
myBar.addEventListener("click", (e) => {
  myBar.classList.toggle("tst-point");
  if (myBar.classList.contains("tst-point")) {
    barContent.style.display = "block";
    document.body.style.overflow = "hidden";
    myMain.style.display = "none";
    myFooter.style.display = "none";
    myHeader.style.boxShadow = "none";
    orderBtn.style.visibility = "hidden";
  }
  // when i click in Bar second time
  else if (!myBar.classList.contains("tst-point")) {
    barContent.style.display = "none";
    // document.body.style.overflow = "auto";
    myMain.style.display = "block";
    myFooter.style.display = "block";
    console.log("Now HAPPEND");
  }
});
// Editing Button Exite
btnExit.addEventListener("click", () => {
  barContent.style.display = "none";
  myHeader.style.boxShadow = "0px 0px 3px 1px rgba(200, 200, 200, 0.39)";
  myMain.style.display = "block";
  myFooter.style.display = "block";
  document.body.style.overflow = "auto";
  myBar.classList.remove("tst-point");
  orderBtn.style.visibility = "visible";
});

// Showing and Hidding in Footer
const abouts = document.querySelectorAll(".about");
abouts.forEach(function (about) {
  const btn = about.querySelector("#about-btn");
  btn.addEventListener("click", function () {
    // console.log(btn)
    abouts.forEach(function (item) {
      // item = all class name about
      // console.log(item)
      if (item !== about) {
        item.classList.remove("show");
      }
    });
    about.classList.toggle("show");
  });
});

// ***** Add show in header less 1200px for language and product ***p
// const aboutBtn = document.getElementById('about-btn')
// aboutBtn.addEventListener('click', (e)=> {
//   console.log(e.currentTarget)
//   const x = e.currentTarget.parentElement.parentElement
//   x.classList.toggle("show")
//   // e.currentTarget
// })
