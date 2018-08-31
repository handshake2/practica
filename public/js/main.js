//const socket=io();
$(function (){
    //alert('works');
    const socket=io();

    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    $messageForm.submit( e => {
        e.preventDefault();
        console.log($messageBox.val());
        socket.emit('send message', $messageBox.val());
        //socket.emit('send message', $messageBox.val(), data => {
          //$chat.append(`<p class="error">${data}</p>`)
        //});
        $messageBox.val('');
      });
      socket.on('new message',function(data){
        $chat.append(data + '<br/>');
    });
    })
    