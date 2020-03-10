    
    var keylogger = document.getElementById("keylogger");

    document.addEventListener("keypress", function(event) 
    {   
        keylogger.value += event.key;
    });
