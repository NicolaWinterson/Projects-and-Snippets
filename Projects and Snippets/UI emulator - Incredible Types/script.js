/*document.getElementById('fullscreen-menu').onclick = function() {
    const toggleMenu = document.getElementById("hidden-nav");
    toggleMenu.style.display = toggleMenu.style.display === 'none' ? 'block' : 'none';
  };*/


  document.getElementById('fullscreen-menu').onclick = function() {
    const toggleMenu = document.getElementById("hidden-nav");
    const menuInnerHTML = document.getElementById('fullscreen-menu');
    if (toggleMenu.style.display === "none") {
        toggleMenu.style.display = "block";
        menuInnerHTML.innerHTML = "Hide menu"
        console.log("toggle show menu")
    } else {
        toggleMenu.style.display = "none";
        menuInnerHTML.innerHTML = "Show menu"
        console.log("toggle hide menu")
    }
  }



