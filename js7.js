function calcolaPariEdispari(array){
  cont1=0;
  cont2=0;
  for(let i=0;i<array.length;i++){
    array[i]%2==0?cont1=cont1+array[i]:cont2=cont2+array[i];
  }
  return [cont1 , cont2]
}
console.log(calcolaPariEdispari([72,87,72,92,10,19,52,73]))