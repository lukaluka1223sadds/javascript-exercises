// dati N numeri fare la media dei numeri dispari maggiori di 80

function f(...numeri){
   let cont=0
   let media=0
   for(let i=0;i<numeri.length;i++){
        if (numeri[i]%2==0 && numeri[i]>80){
            cont=cont+1
            media=media+numeri[i]
            
        }
   }
   console.log(media/cont)
}

f(12,21,412,235,524)