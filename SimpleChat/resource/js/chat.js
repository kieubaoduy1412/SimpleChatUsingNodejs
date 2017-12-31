//Cổng ni làm việc với cổng ở bên index.js của server
var socket = io.connect("http://localhost:3000")

// Client kết nối tới admin
socket.on("connect",function(){
	console.log("admin-connect")
})

//Client nhận dữ liệu từ phía server
socket.on('server_data',function(responseData){
	console.log(responseData);
	//So sánh theo account.. Nếu đúng account gửi lên thì hiển thị về
	if(responseData.account==="duy"){
		var content = "<div class='direct-chat-msg doted-border'>"
						+ "<div class='direct-chat-info clearfix'>"
                        	+ "<span class='direct-chat-name pull-left'>"+responseData.account+"</span>"
                        + "</div>"
                        + "<img alt='iamgurdeeposahan' src='http://bootsnipp.com/img/avatars/bcf1c0d13e5500875fdd5a7e8ad9752ee16e7462.jpg' class='direct-chat-img'>"
                        + "<div class='direct-chat-text'>"
                        	+ responseData.message 
                        +"</div>"
					    + "<div class='direct-chat-info clearfix'>"
                        	+ "<span class='direct-chat-timestamp pull-right'>3.36 PM</span>"
                        + "</div>"
                    + "</div>" 
        $(".direct-chat-messages").append(content)
		$(".chat-container").append("<br/>" + responseData.message);
	}
})

//Khi click nút send, socket gửi client_data lên server, trong client data nớ mình 
//ưa đưa dô cái chi đó thì đưa (dạng json)
function sendMessage(messageFromClient){
	socket.emit("client_data",{account: "duy",message: messageFromClient})
}



/*$("button").on("click", function() {
  // cache textarea as we need it more than once
  var textarea = $("textarea"),
  // save old value as we need to clear it
  val = textarea.val();
  // if the value doesn't end in a space, add one
  if (val.charAt(val.length-1) != " ") {
    val += " ";
  }
  // focus textarea, clear value, re-apply
  textarea.focus().val("").val(val);
});*/