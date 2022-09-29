
function create_alert(){ 
    //alert("Hello World");
    document.getElementById("the_text").style.fontSize="24pt";
}

function fancy_alert(){
    document.getElementById("the_text").style.fontWeight="Bold";
    document.getElementById("the_text").style.color="Blue";
    document.getElementById("the_text").style.textDecoration="Underline"
}
function boring_alert(){
    document.getElementById("the_text").style.fontWeight="normal";
    document.getElementById("the_text").style.color="Black";
    document.getElementById("the_text").style.textDecoration="None"
    document.getElementById("the_text").style.textTransform="lowercase";
}
function to_moo(){
    document.getElementById("the_text").style.textTransform="uppercase";
    var message = document.getElementById("the_text");
    var segment = message.value.split(".");
    message.value = segment.join("-Moo");
    
}