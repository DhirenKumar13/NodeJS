setTimeout(function () {
	try{
		throw new Error("DhirenException")
	}catch(e){
		if(e.code == undefined){
			console.log(e.message);
			console.log("has been caught !!!");
		}else{
			console.log(e.message);
			console.log(e.code);
			console.log("has been caught !!!");
		}
	}
},3000);