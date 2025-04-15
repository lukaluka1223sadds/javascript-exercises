//Crea function che acetta 10 numeri e fare media dei numeri maggiori di 15

function f(...numeri) {
  if (numeri.length == 10) {
    let cont1=0
    let media=0
    for (let i = 0; i <= 9; i++) {
        numeri[i]>15?cont1=cont1+1:""
        numeri[i]>15?media=media+numeri[i]:""
        
    }
    console.log(media/cont1)
  } else {
    console.log("numeri non sono 107");
  }
}

f(123, 24, 124, 124, 124, 14, 61, 611, 16, 5);
