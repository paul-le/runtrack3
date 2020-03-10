
    // function toast()
    // {
    //     var toast = document.getElementById('citation');
    //     if(toast.style.display === "none")
    //     {
    //         toast.style.display = "block";
    //     }
    //     else
    //     {
    //         toast.style.display = "none";
    //     }
    // }

    
    function toast()
    {

        var toast = document.getElementsByTagName('div');

        if(toast[0] == null)
        {
            var testdiv = document.createElement('div');
            var testtext = document.createTextNode("L'important     n'est pas la chute, mais l'atterrissage.");
            document.body.appendChild(testdiv);
            testdiv.appendChild(testtext);
        }
        else
        {
            document.body.removeChild(toast[0]);
        }

        // if(document.contains(document.getElementsByTagName("div")))
        // {
        //     document.getElementsByTagName("div").remove();
        // }
    }


