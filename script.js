//FeaturesDropdown
console.log("Satyam Jha");
let featureclick = document.getElementById("featureclick");
let featuresDropdown = document.getElementById("features-dropdown");
let dropDownArrow = document.getElementById("featuresDropDownArrow");
featureclick.addEventListener("click", function () {
  if (featuresDropdown.style.display != "flex") {
    featuresDropdown.style.display = "flex";
    dropDownArrow.src = "../images/icon-arrow-up.svg";
  } else {
    featuresDropdown.style.display = "none";
    dropDownArrow.src = "../images/icon-arrow-down.svg";
  }
});

//companyDropdown
let companyDropdown = document.getElementById("companydropdown");
let companyClick = document.getElementById("companyClick");
let companyDropdownArrow = document.getElementById("companyDropdownArrow");

companyClick.addEventListener("click", function () {
    if (companyDropdown.style.display != "flex") {
      companyDropdown.style.display = "flex";
      companyDropdownArrow.src = "../images/icon-arrow-up.svg";
    } else {
      companyDropdown.style.display = "none";
      companyDropdownArrow.src = "../images/icon-arrow-down.svg";
    }
  });

//HamburgerMenu
let menuicon = document.getElementById('menuicon')
let phonemenu = document.getElementById('phonemenu')
menuicon.addEventListener('click', function(){
if(phonemenu.style.display != 'flex'){phonemenu.style.display = 'flex'
menuicon.src = './images/icon-close-menu.svg'}

else{phonemenu.style.display = 'none';
menuicon.src = './images/icon-menu.svg'}




})







//PhoneMenuExpand

let phonefeat = document.getElementById('phonefeat')
let phonefeatureclick = document.getElementById("phonefeatureclick")
let phonefeatdownicon = document.getElementById("phonefeatdownicon")

phonefeat.addEventListener('click',function(){
  if(phonefeatureclick.style.display != 'block')
  {phonefeatureclick.style.display = 'block'
  phonefeatdownicon.src = './images/icon-arrow-up.svg'
}
  else{phonefeatureclick.style.display = 'none'
  phonefeatdownicon.src = './images/icon-arrow-down.svg'
}

})




let phonecompanyclick = document.getElementById('phonecompanyclick')
let phonecompany = document.getElementById("phonecompany")
let phonecompdownicon = document.getElementById("phonecompdownicon")

phonecompanyclick.addEventListener('click',function(){
  if(phonecompany.style.display != 'block')
  {phonecompany.style.display = 'block'
  phonecompdownicon.src = './images/icon-arrow-up.svg'
}
  else{phonecompany.style.display = 'none'
  phonecompdownicon.src = './images/icon-arrow-down.svg'
}

})



    

  
