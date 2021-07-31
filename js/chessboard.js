
class chessBoard {
	
	constructor() {
		this.FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
		this.plotBoard();
		this.plotPieces( this.FEN );
	}
	
	plotBoard() {
	  	var i;
	  	var j;
		var flag;
		var str;
		var board;
		
		board = "";
		  		
  		flag = false;
  		
  		for(i=0;i < 8;i++) {
	  		for(j=0;j < 8;j++) {
	  			str = String.fromCharCode( (65 + i ) ) + ( 8 - j );
	  			if(flag) {
					board += '<div class="cell black row' + j + ' col' + i +'" id="'+ str +'"></div>';
				} else {
					board += '<div class="cell white row' + j + ' col' + i +'" id="'+ str +'"></div>';
				}
				flag = !flag;
			}
			flag = !flag;
		}
		document.getElementById("app").innerHTML = '<div class="board">' + board + '</div>';
  	}

	plotPieces( FEN ) {
		var i;
		var j;
		var str;
		
		var rowNum = 0;
		var colNum = 0;
		var c;
		var thisChar;
		
		console.log( "FEN: " + FEN );
		
  		for(i=0;i < 8;i++) {
	  		for(j=0;j < 8;j++) {
	  			str = String.fromCharCode( (65 + i ) ) + ( 8 - j );
				document.getElementById( str ).innerHTML = '';
			}
		}			
		i = 0;
		
		do {
			c = FEN[i++];
	
			if( c == '' || c == '\n' )
				continue;
			
			thisChar = String.fromCharCode( c - '0' );
			
			if( c == '/' ) {
				rowNum++;
				colNum = 0;			
			} else if (thisChar > 0 && thisChar <= 9 ) {
				for( j = 0; j < thisChar; j++ ) {
		  			str = String.fromCharCode( (65 + colNum ) ) + ( 8 - rowNum );
					document.getElementById( str ).innerHTML = '';
				}
			} else {
				str = String.fromCharCode( (65 + colNum ) ) + ( 8 - rowNum );
				
				switch( c ) {
					case 'R':
					document.getElementById( str ).innerHTML = '<img src="img/white_rook.png" class="image"></img>';
					break;
					case 'N':
					document.getElementById( str ).innerHTML = '<img src="img/white_horse.png" class="image"></img>';
					break;
					case 'B':
					document.getElementById( str ).innerHTML = '<img src="img/white_bishop.png" class="image"></img>';
					break;
					case 'K':
					document.getElementById( str ).innerHTML = '<img src="img/white_king.png" class="image"></img>';
					break;
					case 'Q':
					document.getElementById( str ).innerHTML = '<img src="img/white_queen.png" class="image"></img>';
					break;
					case 'P':
					document.getElementById( str ).innerHTML = '<img src="img/white_pawn.png" class="image"></img>';
					break;
					case 'r':
					document.getElementById( str ).innerHTML = '<img src="img/black_rook.png" class="image"></img>';
					break;
					case 'n':
					document.getElementById( str ).innerHTML = '<img src="img/black_horse.png" class="image"></img>';
					break;
					case 'b':
					document.getElementById( str ).innerHTML = '<img src="img/black_bishop.png" class="image"></img>';
					break;
					case 'k':
					document.getElementById( str ).innerHTML = '<img src="img/black_king.png" class="image"></img>';
					break;
					case 'q':
					document.getElementById( str ).innerHTML = '<img src="img/black_queen.png" class="image"></img>';
					break;
					case 'p':
					document.getElementById( str ).innerHTML = '<img src="img/black_pawn.png" class="image"></img>';
					break;
					
				}	
				colNum++;	
			}
							 
		} while( !(colNum == 8 && rowNum ==7 ) );
		
	}  	

}

