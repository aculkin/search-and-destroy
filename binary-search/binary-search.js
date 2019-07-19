'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length===1) {
		console.log('one', target, array[0])
		if(array[0]===target){
			return true
		}else{
			return false
		}
	} else{
		if(array.length%2===0){
			console.log('even',target, array)
			let minIndex = array.length/2-1
			let maxIndex = array.length/2
			if(target<array[maxIndex]&&target>array[minIndex]){
				return false
			}else if(target<=array[minIndex]){
				console.log('one')
				return binarySearch(array.slice(0, maxIndex), target)
			}else if(target>=array[maxIndex]){
				console.log('two')
				return binarySearch(array.slice(maxIndex), target)
			}
		} else {
			console.log('odd', target, array)
			let midIndex = (array.length-1)/2
			let minIndex = midIndex-1
			let maxIndex = midIndex+1
			if(target===array[midIndex]){
				return true
			}else if(target<=array[minIndex]){
				console.log('three')
				return binarySearch(array.slice(0, midIndex), target)
			}else if(target>=array[maxIndex]){
				console.log('four')
				return binarySearch(array.slice(maxIndex), target)
			}else{
				return binarySearch(array.slice(maxIndex, target))
			}
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch