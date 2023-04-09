$(document).on('submit', '#post-form', function(event){
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "/send",
            data:{
                username: $('#username').val(),
                room_id: $('#room_id').val(),
                message: $('#message').val(),
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(response){
                //alert(data)
            },
        });
        document.getElementById("message").value = "";
    });


function messages(){
    $(document).ready(function(){
        setInterval(function(){
            $.ajax({
                type: "GET",
                url: "/get_Messages/{{room}}/",
                success: function(response){
                    console.log(response);
                    $("#display").empty();
                    for (var key in response.messages) {
                        var temp="<div class='container darker'><b>"+response.messages[key].user+"</b><p>"+response.messages[key].value+"</p><span class='time-left'>"+response.messages[key].date+"</span></div>";
                        $('#display').append(temp);
                    }
                },
                error: function(response){
                    var room = "{{ room_name }}";
                    console.log(room);
                    alert("An error occured")
                }
            });
        }, 1000);
    });
}