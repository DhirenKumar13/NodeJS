function intersect(array1 , array2) {
	var intersectArray = [];

	for(int i=0;i<=array1.length;i++){
		for(int j=0;j<=array2.length;j++){
			if(array2[j] == array1[i]){
				intersectArray.push(array2[j]);
				break;
			}
		}
	}
	return intersectArray;
}

console.log(intersect(arrays.array1,arrays.array2).length);