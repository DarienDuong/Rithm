function displayCities(){
	var citiesLived = instructorData.additionalData.moreDetails.citiesLivedIn
	for(var i =0; i < citiesLived.length; i ++){
		console.log(citiesLived[i])
	}
}

function displayHometownData(){
	var hometown = instructorData.additionalData.moreDetails.hometown
	for(var key in hometown){
		console.log(hometown[key])
	}
}

function addDetail(key, value){
	var moreDetails = instructorData.additionalData.moreDetails
	moreDetails[key] = value
	return moreDetails
}

function removeDetail(key){
	var moreDetails = instructorData.additionalData.moreDetails
	delete moreDetails[key]
	return moreDetails
}