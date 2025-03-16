const array=[12,23,4,1,42,2,123,2,13]
function getArray(arr){
    const newArr=arr.filter(a=>a%2==0)
    .sort((a,b)=>a-b)
    return newArr
}
console.log(getArray(array))