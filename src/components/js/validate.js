function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert(" must be filled out");
        return false;
    } else {
    	alert("Your event has been submitted for review");
    }
}