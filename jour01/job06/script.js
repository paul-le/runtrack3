
    function fizzbuzz()
    {
        for($nombre=1;$nombre<=151;$nombre++){
            if($nombre % 3 == 0 && $nombre % 5 == 0)
            {
                console.log("FizzBuzz");
            }
            else if($nombre % 3 == 0)
            {
                console.log("Fizz");
            }
            else if($nombre % 5 == 0)
            {
                console.log("Buzz");
            }
            else
            {
                console.log($nombre);
            }
        }
    }