function showPopUpChat(){
	$(".chat_container").css("display","block")
	$(".chat_show_button").css("display","none")
}

function hidePopUpChat(){
	$(".chat_container").css("display","none")
	$(".chat_show_button").css("display","block")
}

$(document).ready(function(){

	var userName = $("#username").val();
	$('#status_message').on('keyup', function (e) {
		console.log($(".direct-chat-messages")[0].scrollHeight)
		$(".direct-chat-messages").scrollTop(400);
	    if(e.which === 13){
	    	// Gửi tin nhắn
	    	sendMessage($('#status_message').val());
	    	//Sau khi gửi tin nhắn xong clear contents
	    	$('#status_message').val("");

	    	//Thiết lập cái scroll bar lun lun ở dưới
	    	$(".direct-chat-messages").scrollTop($(".direct-chat-messages")[0].scrollHeight);
	    }
	});
})

		/*// cache textarea as we need it more than once
		var textarea = $(".chat-container");
		// save old value as we need to clear it
		val = textarea.val();
		// if the value doesn't end in a space, add one
		if (val.charAt(val.length-1) != " ") {
		    val += " ";
		}
		// focus textarea, clear value, re-apply
		textarea.focus().val("").val(val);*/