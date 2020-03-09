
    // function jourtravaille(date)
    // {
    //     var jour = getDate();
    //     var mois = getMonth();
    //     var année = getFullYear();
    // }

    function jourtravaille(date)
    {
        const jour = date.getDate();
        const mois = date.getMonth() + 1;
        const année = date.getFullYear();
        const fullJour = jour + mois + année;
        const joursFeries = ["15 8 2020","1 5 2020", "8 5 2020", "21 5 2020", "1 6 2020","1 1 2020", "14 7 2020", "1 11 2020","13 4 2020", "11 11 2020", "25 12 2020"];
        if ( joursFeries.includes(fullJour) ) {
            console.log("Le" + jour + mois + année + "est férié");
        }
        if (date.getDay() == 6 || date.getDay() == 0) {
            console.log("Non," + jour + mois + année + "est un week-end");
        }
        else if ( !joursFeries.includes(fullJour) ) {
            console.log("Oui, " + jour + "/" + mois + "/" + année + " est un jour travaillé"  );
        }
    }
    
    jourtravaille(new Date("May 1, 2020"));
