var count = 0;
var totali = 0;
$(document).ready(function() {
	$(".produkt").click(function(){
		count++;
		$("#sasia").html(count);
		var pepi = $(this).attr("value");
		switch(pepi) {
			// case 1 cmimi i iphonit
			case "1":
				totali +=800;
				break;
			// case 2 cmimi i samsungit 
			case "2":
				totali += 510;
				break;
			case "3":
				totali += 550;
				break;
			case "4":
				totali += 680;
				break;
			case "5":
				totali += 710;
				break;
			case "6":
				totali += 360;
				break;
			case "7":
				totali += 910;
				break;	
			case "8":
				totali += 770;
				break;
			default:
				totali = "Nuk lejohet kopjimi apo riperdorimi i kodit pa autorizimin e @perparimkabashi";
				break;
		}
		$("#totali").html(totali);
	});
	// reset
	$("#reset").click(function(){
		count = 0;
		totali = 0;
		$("#sasia").html("");
		$("#totali").html("");
	})
})

if (typeof(Storage) !== "undefined") {
    localStorage.setItem("sasia", "count");
    localStorage.setItem("totali", "totatli"); 
} else {
    document.getElementById("result").innerHTML = "Na falni, shfletuesi i juaj nuk e perkrahe WEB storage";
}