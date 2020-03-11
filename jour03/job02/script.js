
    var toastCount =$("#melangees").children().length;
    console.log(toastCount);

    var toast2 =$("#rangees").children().toArray();
    console.log(toast2);

    var currentIndex = toast2.length, temporaryValue, randomIndex;
    console.log(currentIndex);

    function melange(toast2)
    {
        while (0 !== currentIndex)
        {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = toast2[currentIndex];
            toast2[currentIndex] = toast2[randomIndex];
            toast2[randomIndex] = temporaryValue;
        }
        return toast2;
    }

    var ilfocheufeul = true;

    $("#button").click(function()
    {
        var resultat = melange($("img")).appendTo("#rangees");
        ilfocheufeul = false;
        return resultat;
    })
    
    // var resultattoast = JSON.stringify(toast2);
    // var resultatresultat = JSON.stringify(resultat);
    // console.log(resultatresultat);
    // console.log(toast2);

// if(resultattoast == resultatresultat)

    var toastVictory = [];
    var toastVictoryCheck = 0;
    var toastVictoryLeBon = ["1", "2", "3", "4", "5", "6"];

    $("#image1").click(function(){
        if(ilfocheufeul == false)
        {
            if($("#image1").parent().attr('id') == "rangees")
            {
                $("#image1").appendTo("#melangees");
                toastVictory.push('1');
                console.log(toastVictory);
                toastVictoryCheck++;
                var toastCount =$("#melangees").children().length;
                if(toastVictoryCheck == 6)
                {
                    if(toastVictory == toastVictoryLeBon)
                    {
                        console.log("gg");
                    }
                    else
                    {
                        console.log("beh");
                    }
                }
                console.log(toastCount);
            }
        }
    })

    $("#image2").click(function(){
        if(ilfocheufeul == false)
        {
            if($("#image2").parent().attr('id') == "rangees")
            {
                $("#image2").appendTo("#melangees");
                toastVictory.push('2');
                console.log(toastVictory);
                toastVictoryCheck++;
                var toastCount =$("#melangees").children().length;
                if(toastVictoryCheck == 6)
                {
                    if(toastVictory == toastVictoryLeBon)
                    {
                        console.log("gg");
                    }
                    else
                    {
                        console.log("beh");
                    }
                }
            }
        }
    })

    $("#image3").click(function(){
        if(ilfocheufeul == false)
        {
            if($("#image3").parent().attr('id') == "rangees")
            {
                $("#image3").appendTo("#melangees");
                toastVictory.push('3');
                console.log(toastVictory);
                toastVictoryCheck++;
                var toastCount =$("#melangees").children().length;
                if(toastVictoryCheck == 6)
                {
                    if(toastVictory == toastVictoryLeBon)
                    {
                        console.log("gg");
                    }
                    else
                    {
                        console.log("beh");
                    }
                }
            }
        }
    })

    $("#image4").click(function(){
        if(ilfocheufeul == false)
        {
            if($("#image4").parent().attr('id') == "rangees")
            {
                $("#image4").appendTo("#melangees");
                toastVictory.push('4');
                console.log(toastVictory);
                toastVictoryCheck++;
                var toastCount =$("#melangees").children().length;
                if(toastVictoryCheck == 6)
                {
                    if(toastVictory == toastVictoryLeBon)
                    {
                        console.log("gg");
                    }
                    else
                    {
                        console.log("beh");
                    }
                }
            }
        }
    })

    $("#image5").click(function(){
        if(ilfocheufeul == false)
        {
            if($("#image5").parent().attr('id') == "rangees")
            {
                $("#image5").appendTo("#melangees");
                toastVictory.push('5');
                console.log(toastVictory);
                toastVictoryCheck++;
                var toastCount =$("#melangees").children().length;
                if(toastVictoryCheck == 6)
                {
                    if(toastVictory == toastVictoryLeBon)
                    {
                        console.log("gg");
                    }
                    else
                    {
                        console.log("beh");
                    }
                }
            }
        }
    })

    $("#image6").click(function(){
        if(ilfocheufeul == false)
        {
            if($("#image6").parent().attr('id') == "rangees")
            {
                $("#image6").appendTo("#melangees");
                toastVictory.push('6');
                console.log(toastVictory);
                toastVictoryCheck++;
                var toastCount =$("#melangees").children().length;
                if(toastVictoryCheck == 6)
                {
                    if(toastVictory == toastVictoryLeBon)
                    {
                        console.log("gg");
                    }
                    else
                    {
                        console.log("beh");
                    }
                }
            }
        }
    })
    
    if(toastCount == 6)
    {
        console.log("toast");
    }

    // if($("melangees").children().length == 6)
    // {
    //     console.log("toast");
    // }