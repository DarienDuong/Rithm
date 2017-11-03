var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens(){
	for(var i =0; i<nestedArr.length; i++){
		for(var j =0; j<nestedArr[i].length; j++){
			if(nestedArr[i][j] % 2 === 0){
				console.log(nestedArr[i][j])
			}
		}
	}
}

var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal(){
	var total = 0
	for (var i =0; i < nestedArr.length; i ++){
		for (var j = 0; j<nestedArr[i].length; j ++){
			for (var k =0; k<nestedArr[i][j]; k++){
				total += nestedArr[i][j][k]
			}
		}
	}
}