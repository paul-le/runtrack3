$("#button").click(function()
{

$.ajax({
    method:"POST",
    url:"job02.json",

    success:function(data)
    {
        console.log(jsonValueKey(data , "city"));
    }
});

    function jsonValueKey(data , key)
    {
        var counter = Object.keys(data).length;
        var i = 0;
        console.log(counter);
        while(i != counter)
        {
            if(key == Object.keys(data)[i])
            {
                return data.city;
            }
            i++;
        }
        // console.log(data.city);

        
        

        // for (var city of city)
        // {
        //     $("#messages").append(toast + "<br>");
        // }
    }
});
// function jsonValueKey(marseille , city)
// {
//     var toast = JSON.parse(marseille);
//     for (var marseille of city)
//     {
//         $("#messages").append(message + "<br>");
//     }
// }