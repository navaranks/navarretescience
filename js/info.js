var acc = document.getElementsByClassName("mmenu");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownpanel = this.nextElementSibling;
    if (dropdownpanel.style.maxHeight) {
      dropdownpanel.style.maxHeight = null;
    } else {
      dropdownpanel.style.maxHeight = dropdownpanel.scrollHeight + "px";
    }
  });
}
