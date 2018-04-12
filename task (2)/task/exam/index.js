function getFriendlyNumbers(start, end) {
    
	if(isNaN(start) 
		|| isNaN(end) 
		|| start < 0 
		|| end < 0 
		|| start > end 
		|| start == ''
		|| end == '' 
		|| start == null
		|| end == null
		|| start.length != undefined
		|| end.length != undefined){

		return false;
	}

	let maxDivFirst = 0,
		maxDivSecond = 0,
		sumFirst = 0,
		sumSecond = 0,
		friendlyNumbersArray = [],
		localArray = [];

	for (let i = start; i <= end; i++){
		sumFirst = 0,
		sumSecond = 0,
		localArray = [];

		if(i == 1){
			maxDivFirst = 1;
			sumFirst = 1; 
		} else {
			if (i % 2 == 1){
				maxDivFirst = Math.round(i / 2 - 1);
			} else {
				maxDivFirst = Math.round(i / 2);
			}

			sumFirst = getSum(i, maxDivFirst);
		}

		if(sumFirst == 1){
			maxDivSecond = 1;
			sumSecond = 1; 
		} else {
			if (sumFirst % 2 == 1){
				maxDivSecond = Math.round(sumFirst / 2 - 1);
			} else {
				maxDivSecond = Math.round(sumFirst / 2);
			}

			sumSecond = getSum(sumFirst, maxDivSecond);
		}

		if (sumSecond == i && i != sumFirst){
			let less = 0,
				greater = 0,
				flag = false;

			if(i < sumFirst) {
				less = i;
				greater = sumFirst;
			} else {
				less = sumFirst;
				greater = i;
			}

			for (let j = 0; j < friendlyNumbersArray.length; j++){
				if (friendlyNumbersArray[j][0] == less){
					flag = true;
					break;
				}
			}

			if(flag == false && less >= start){
				localArray[0] = less;
				localArray[1] = greater;
				friendlyNumbersArray[friendlyNumbersArray.length] = localArray;
			}
		}
	}

	return friendlyNumbersArray;
}

function getSum(number, maxDiv){
	let sum = 0;

	for (let i = 1; i <= maxDiv; i++){
		if (number % i == 0){
			sum += i;
		}
	}

	return sum;
}

module.exports = {
    firstName: 'Roman',
    secondName: 'Alexanov',
    task: getFriendlyNumbers
}