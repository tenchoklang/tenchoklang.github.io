var newTodo;
//$(".fa-check").hide();

//$("span").hide(); // hide the spans
$(".todo-item:nth-of-type(odd)").css("background", "#f7f7f7")

$("input[type='text']").keypress(function(pressedObject){//input of type text
	if(pressedObject.which == 13 && $("input").val() != ""){//if you press enter and input is not empty
		newTodo = $("input").val();//get value of input
		console.log(newTodo)

		$(".todo-container").append("<li class='todo-item'><span> <i class='fa fa-trash' aria-hidden='true'></i> </span> " + newTodo +"<i class='fa fa-check checkMark' aria-hidden='true'></i></li>")
		//$("span").hide(); // hide the spans of newly added li
		$(".todo-item:nth-of-type(odd)").css("background", "#f7f7f7")//make the odd li's grey

		$("input").val("");//clear the input
	}
})



//$("li").mouseover(function(){
//	$(this).children().show();
//})

//$("li").hover(function(){
//	$(this).children().show()
//},function(){
//	$(this).children().hide()
//})

//show X when its hovering
// $("#container").on("mouseenter", "li", function(){
// 	$(this).children().show();
// })
// $("#container").on("mouseleave", "li", function(){
// 	$(this).children().hide();
// })


$(".todo-container").on("click", "li", function(event){
	event.stopPropagation();
	$(this).toggleClass("strike")
	$(this).children("i").toggleClass("checkMark")
	//console.log($(this).html())
})


$(".todo-container").on("click", "span",function(event){//removes the parent element of X when clicked on
	$(this).parent().css("background", "#e74c3c");
	$(this).parent().css("color", "white");

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
		$(".todo-item:nth-of-type(odd)").css("background", "#f7f7f7");
		$(".todo-item:nth-of-type(even)").css("background", "white");
	});

	event.stopPropagation();

})


$(".todo-container h1").on("click", ".fa-caret-up", function(){
	$(this).replaceWith("<i class='fa fa-plus' aria-hidden='true'></i>");
	$("input").slideUp(100);
})



$(".todo-container h1").on("click", ".fa-plus", function(){
	$(this).replaceWith("<i class='fa fa-caret-up' aria-hidden='true'></i>");
	$("input").show();
})
