var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    socket.emit('createMessage',{
        to: 'Miguel',
        text: 'Hey, daqui é o Miguel'
    });
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('New message',message);
});