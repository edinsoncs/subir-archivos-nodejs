$(document).ready(function(){


	function showIMG(input) {
		if(input.files && input.files[0]){
			var reader = new FileReader();
			reader.onload = function(e){
				$("#showIMG").attr('src', e.target.result);
				$("#showIMG").css({
					'width': '100px',
					'height': '100px'
				});
			}
			reader.readAsDataURL(input.files[0]);
		}
		
	}

	$("#img").change(function(e){
		showIMG(this);
		$(".loadCss").fadeIn();
	});


});