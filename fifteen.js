window.onload= function(){
	var puzzlePieces= document.getElementsByClassName("puzzlepiece");
	picture();
		

		

	document.getElementById("shufflebutton").onclick= function()
	{
		times = Math.floor(Math.random() * 100) + 500;

		for(var i=0; i < times; i++){
			movements();
	

	}
		
}



}

 function picture()
 {
 	let x=0,
 	y=0,
 	top=0,
 	left=0,
 	count=1;
 		var puzzleArea=document.getElementById("puzzlearea").childNodes;


	for (var i = 0; i < puzzleArea.length; i++) {
		if (puzzleArea[i].nodeName=="DIV"){
			puzzleArea[i].className="puzzlepiece";

		}
	}

 	var puzzlePieces= document.getElementsByClassName("puzzlepiece");

 	for( var i=0; i< puzzlePieces.length; i++){

 		puzzlePieces[i].setAttribute("style",`background-position: ${x}px ${y}px; top: ${top}px; left: ${left}px;`);
 		
 		x-=100;
 		left+=100;

 		if (count%4==0)
 		{
 			y-=100;
 			top+=100;
 			left=0;

 		}
 		count+=1;
 		puzzlePieces[i].onmouseover=function(){
				if (nearblank(puzzlePieces[i])){
					puzzlePieces[i].addClass("movepiece")
				}
			}
				puzzlePieces[i].onmouseleave=function(){
					$(this).removeClass("movepiece")
				}
			$(puzzlePieces[i]).on("click", function(){
			if(nearblank(this)){ shuffle(this); }
		});
 			
		}
	}
  var blankx = 300;
    var blanky = 300;

 	var puzzlePieces= document.getElementsByClassName("puzzlepiece");
 var nearblank= function(puzzlePieces){

		if(((parseInt($(puzzlePieces).css("top")) - blanky == 100 || parseInt($(puzzlePieces).css("top")) - blanky == -100) && parseInt($(puzzlePieces).css("left")) - blankx == 0)
			||((parseInt($(puzzlePieces).css("left")) - blankx == 100 || parseInt($(puzzlePieces).css("left")) - blankx == -100) && parseInt($(puzzlePieces).css("top")) - blanky == 0)){
				return true;
			}

		else{ return false; }
	};
function movements()
{
		var puzzlePieces= document.getElementsByClassName("puzzlepiece");
		var arr = [];

		for(var i=0; i < puzzlePieces.length; i++){
			if (nearblank(puzzlePieces[i]) == true){
				arr.push(puzzlePieces[i]);
			}
		}
		var blank = arr[Math.floor(Math.random() * arr.length)];

		
		shuffle(blank);

	};
	var shuffle = function(blank){
		var tempx = blankx;
		var tempy = blanky;

		blanky = parseInt($(blank).css("top"));
		blankx = parseInt($(blank).css("left"));

        $(blank).css("top", tempy);
		$(blank).css("left", tempx);
	};