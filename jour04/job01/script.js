
$("#button").click(function()
{

    $.ajax(
    {
        url:"expression.txt",
        dataType:"text",
    })

    .done(function(toast)
    {
            var messages = `<p>${toast}</p>`;
            $("#messages").append(messages);
    }
    )
});