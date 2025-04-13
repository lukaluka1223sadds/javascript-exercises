
import store from './redux-1.js'; 
import { updateName, updateSurname } from './nameSlice'; 


console.log('Stato iniziale:', store.getState());


store.dispatch(updateName('Mario'));
console.log('Stato dopo updateName:', store.getState());


store.dispatch(updateSurname());
console.log('Stato dopo updateSurname:', store.getState());