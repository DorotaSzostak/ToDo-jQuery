// Check off specific todos by clicking
$("ul").on("click", "li", function(){
// 	// if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 	// turn it black
// 	$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// 	}
// // else 
// else {
// 	// turn it gray
// 	$(this).css ({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// }

// SZYBKI SPOSóB PO UTWORZENIU KLASY!!!!!

$(this).toggleClass("completed");
});

// click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// metoda ktora stopuje klikanie w kolejne obszary w ktorych 
	// jest wybrany element "span"
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	// uzytkownik musi nacisnac enter (which nr 13)
if(event.which === 13) {
	// grabbing new todo text from input
	var todoText = $(this).val();
	// wyczyszenie okienka input
	$(this).val("");
	// create a new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "
	 + todoText + "</li>")
}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});