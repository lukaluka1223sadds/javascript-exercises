const arr1 = [1, 3, 5 , 7, 8];
const arr2 = [2, 4, 6];

let finalArray = []

function call1(e){
    for (let d = 0; d < e.length; d++) 
        if( arr1[d] !== undefined){
            finalArray.push(arr1[d])
        
        if(arr2[d] !== undefined)
            finalArray.push(arr2[d]) 
        
    }
    console.log(finalArray)
}

if ( arr1.length < arr2.length )
    call1(arr2)
else
    call1(arr1)
