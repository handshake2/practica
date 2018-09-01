//const socket=io();
$(function (){
    //alert('works');
    const socket=io();

    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickname = $('#nickname');

    const $users = $('#usernames');
    $nickForm.submit(function(e) {
        e.preventDefault();
        socket.emit('new user', $nickname.val(),function(data){
            if(data){
                $('#nickWrap').hide();
                $('#contentWrap').show();
            }else{
                $("#nickError").html("Hello <b>That username already Exists</b>!");
                /*$nickError.html(`
                <div class="alert alert-danger">
                  That username already Exists.
                </div>
              `);*/
            }
            $nickname.val('');

        });
    });
        
    $messageForm.submit( function(e) {
        e.preventDefault();
        console.log($messageBox.val());
        socket.emit('send message', $messageBox.val(),function(data){
          //$chat.append(`<p class="error">${data}</p>`);
          $chat.append('<p class="error">'+data+'</p>');   
        });
        
        $messageBox.val('');
      });
      socket.on('new message',function(data){
        $chat.append('<b>'+data.nick+'</b>:'+data.msg+'<br/>');
    });
    socket.on('usernames',function(data){
        let html='';
        for(let i=0;i<data.length;i++){
            //html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`;
            html +='<p><i class="fas fa-user"></i>'+data[i]+'</P>';
            //alert("Data: " +html);
             
        }
        //$users.html(html);
        $("#usernames").html(html);
    });
    socket.on('whisper',function(data){
        //$chat.append(`<p class="whisper"<b>${data.nick}:</b>${data.msg}</p>`);
        //$chat.append('<p class="whisper"<b>'+data.nick+':</b>'+data.msg+'</p>');
        $chat.append('<p style="margin-top: 0px;margin-bottom: 0px;"<b>'+data.nick+':</b>'+data.msg+'</p>');
        
    })
    })
    