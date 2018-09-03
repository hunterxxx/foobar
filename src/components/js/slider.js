function submit() {
    let content = document.getElementById("sliderSearch").value;
     document.getElementById("sliderSearch").value='';
    
    if (content === '' )  {
        alert("Please enter a search text");
    } else {
        alert(content); 
        content = "";
    }
}
