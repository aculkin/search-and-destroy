'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let memo = {}
    let pointer = linkedlist.head
    while (!pointer.next===null){
        console.log(pointer.value)
        if(memo[pointer.value===true]){
            return true
        }
        memo[pointer.value] = true
        pointer = pointer.next
    }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop