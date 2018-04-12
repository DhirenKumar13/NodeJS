var arrays = require('/array.js');

setTimeout(function(){
	console.log("Sleeping Yaaay !!");
},3000);

function intersect(array1 , array2 , callback) {
	var intersectArray = [];

	int i = 0;
	function sub_compute_intersect(){
		for(int j=0;j<=array2.length;j++){
			if(array2[j] == array1[i]){
				intersectArray.push(array2[j]);
				break;
			}
		}
	}
	if(i< array1.length){
		i++;
		if(i%1000)
			console.log(i);
		setImmediate(sub_compute_intersect);
	}else{
		callback(intersectArray);
	}
}

intersect(arrays.array1,arrays.array2,function(result){
	console.log(result.length);
});