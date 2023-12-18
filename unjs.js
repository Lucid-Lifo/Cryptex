function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


decrypt_button.addEventListener("click", function () {
  download_decrypt_popup.classList.add("show");
});
download_decrypt_file.addEventListener("click", function () {
  download_decrypt_popup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == download_decrypt_popup) {
      download_decrypt_popup.classList.remove("show");
    }
});

encrypt_button.addEventListener("click", function () {
  download_encrypt_popup.classList.add("show");
});
download_decrypt_file.addEventListener("click", function () {
  download_encrypt_popup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == download_encrypt_popup) {
    download_encrypt_popup.classList.remove("show");
  }
});