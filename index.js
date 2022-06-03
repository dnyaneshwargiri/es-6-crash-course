
//=================== Re-declaration ====================
// old JS
var names=["Dnyaneshwar", "John", "Mike"];
var counter=10 ;
 function sayName(){
     var name="Ed";
     console.log(name);
 }

//ES6
const todoList=['Milk', 'Cow'];
todoList=['Butter'] //can not re-assign value

let counter=10;
let counter=5  //wil throw error as re-declaration is not possible in ES6 

//block level scoping
const list=[1,2,3,4]
for(let i=0;i<list.length;i++){
console.log(i) 
//scope of let i is only inside for loop   
}
console.log(i) //will throw error
for(var i=0;i<list.length;i++){
    console.log(i) 
    //scope of var is outside for loop   
}
console.log(i) //will work

//=================== Concatenation ====================

//ES-6
const name="Dnyaneshwar"
const age=24;
console.log(`hello my name is ${name} and my age is ${age }` );

//=================== Object Literals ====================

function showBook(title,author){
    //old js
    return {
    title:title,
    autjor:author
}
//you can do like this in ES6
return{
    title,
    author
}
}
var bool =getBool('Harry Potter', "JK Rowlings");

//=================== Object Desconstruction ====================

var user={
    name:"Dnyaneshwar",
    age:"24"
}
//old js
var Myname=user.name;

//ES6
const shoppingList ={
    Name:"Shopping List",
    items:['Milk',"Bread"]
}
const { Name, items}=list;
console.log(Name,items);//can get properties seprately

//=================== Arrow Function ====================
//old JS
function sayName(){
    console.log("I am Dnyaneshwar")
}
var sayAge=function(){
    console.log('My age is, i dont wanna tell you');
}

sayName();
sayAge();
//arrow funcion
const sayLocation=()=>{
    console.log('my location in unknown')
}
//with paramters
const sayExcatLocation=(location,name)=>{
    console.log(`my location is ${location}`)
}
//=================== this keyword ====================

//old JS
var user ={
    name:"Dnyaneshwar",
    age:24,
    sayName:function(){
        console.log('My Name is' +this.name);
        var that=this
        var fullName=function(){
            console.log("My name is"+this.name+" and my age is"+this.age)
        }
        fullName(); //returns undefined for .name & .age because it is part of main function
        //can solve this issue with that.name & that.age instead of this.name & this.age
    } 
}
user.sayName();

//ES6

const user={
    name:"Dnyaneshwar",
    age:25,
    sayName:function(){
        console.log("My name is"+this.name+" and my age is"+this.age)
        const fullName=()=>{
            console.log("My name is"+this.name+" and my age is"+this.age)
        }
        fullName()//going to work fine with arrow function in ES6

    }
}

//use case
GamepadButton.addEventLister('click',function(){
    var addFade=function(){
        this.style.display="none"; //will not work
    }
    var addFade=()=>{
        this.style.display="none"; //will work
    }

})

//=================== default paramters ====================

//old JS
function multiply(x,y){
    var a =x || 1 //to handle empty parameter exception
    var b= y || 1 //to handle empty parameter exception
    console.log(x*y);
}
multiply(7,8)
multiply()//thorws error when called

//ES6
const add=(c=1,d=1)=>{//degault value 
    console.log(c+d)
}
add(20,56)
//=================== Array Functions ====================

//ES6
const shoppingList2=['Milk', "Eggs", "Chocolate","Bananas"];
//forEach
shoppingList2.forEach((product,index) =>{
    console.log(product,index);
});
//map- allows to get 
const newList=shoppingList2.map(item=>{
    return item+=' new';
})
//filter
newlist=shoppingList2.filter(item=>{
    return item !== 'Eggs'
})
//

//=================== Constructor Functions ====================

//old JS
function Person(name,age,hairColor){
this.name=name;
this.age=age;
this.hairColor=hairColor;
}
var Dny=new Person('Dnyaneshwar',24,'black');
Person.prototype.sayName=function(){
console.log("My name is"+ this.name)
}
Dny.sayName()//will work

function Dny(occupation,  hobbys, name, age, hairColor){
    Person.call(this,name,age,hairColor)
this.occupation=occupation
this.hobbys=hobbys
}


const newPerson=new Dny('SW Engineer', 'Photography', 'Dnyaneshwar',24,"black")//this gets all properties not function
Dny.prototype=Object.create(Person.prototype);
const person=Dny('SW Engineer', 'Photography', 'Dnyaneshwar',24,"black")
person.sayName();

//ES6
class shoppingList3{
    constructor(items, number){
    this.items=items
    this.number=number
    }
    sayList(){
    console.log(this.items)
    }
}
const myList =new  shoppingList3(['Milk',"Choco","Redbull"],3)
myList.sayList(); //works fine

//use of super & extends
class Product extends shoppingList3 {
    constructor(items,number,amount,cost){
        super(items,number)
        this.amount=amount
        this.cost=cost
    }
}
const product=new Product(['Milk',"Choco","Redbul"],3,2,20)


//=================== Promises ====================
//old js apporach of callback function, asynchrnous behaviour
function getData(data,callback){
    setTimeout(()=>{
        console.log('Reading from database...')
        callback({data:data});
    },3000)
}
getData(5,function(data){
    console.log(data);
})
//ES6
//promise is a operation that is going to finish in future
const prom=new Promise((resolve,reject)=>{
    //here async behaviour 
setTimeout(()=>{
    resolve({user:'dny', pass:'34fgfd455645n'});
},3000)
});
prom.then(data=>{
    console.log(data)
}).then(data=>{}) //can use then again

//reject case
const prom2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('something went wrong'));
    },3000)
});
prom.then(data=>{
    console.log(data)
}).catch(err=>{
    console.log*('time out happened/ db wrong credential')
}) //can use then again
