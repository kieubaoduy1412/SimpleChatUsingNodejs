var express = require('express')();
var server = require("http").createServer(express);
var io = require("socket.io")(server);

//Cổng làm việc với client..Cái ni giống cái ở bên phía client
server.listen(3000);

// Server đợi kết nối từ client
io.on("connection",function (socket){
	console.log("Server accept connection")
	//Khi nhận dữ liệu từ phía client đưa lên
	socket.on("client_data",function(clientData){
	console.log(clientData);
	//Gửi trả lại client với tên là server_data..thằng bên client cũng phải khai báo
	//giống tên ni thì nó mới bắt được gói ni

	//Gửi message tới mình thằng kết nối thôi
	//socket.emit("server_data",clientData);
	//Gửi message tới tất cả client đã kết nối
	io.emit("server_data",clientData);
	})
})

