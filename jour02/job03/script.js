
    var i = 0;
    var button = document.getElementById('button');
    var compteur = document.getElementById('compteur');

    function addone()
    {
        compteur.innerHTML = i;
        i++;
    }

    button.addEventListener("click", addone);
