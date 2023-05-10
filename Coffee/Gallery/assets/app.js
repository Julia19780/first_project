const slides= document.querySelectorAll('.slide')

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}
function clearActiveClasses(){
    slides.forEach((slide) => {
    slide.classList.remove('active')
    }
    )
}
// menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Gallery

  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}
