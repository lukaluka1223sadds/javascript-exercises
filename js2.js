const myDate=new Date()
const person = {
    rate: undefined,
    salary:"",
    get(){
        return this.salary= this.rate!==undefined?this.rate * myDate.getDate(): 0;
    }
}
Object.defineProperties(person,{
        rate:{
            configurable:false,
            enumerable:false
        },
        salary:{
            configurable:false,
            writable:true
        }
})


person.rate=27
person.get()
console.log(person.salary)

