// first point
let names = ["Musa", "Rashed", "Sulaiman", "Alabdulhadi"];
logger(names);

names.forEach(function (item)  {
    console.log(item)
});

function logger (namesarray) {

    
}
logger();

// second point




let temps1 = [45, 48, 52, 55]
let value = 49


let temps2 = [];

function hottestdays(array, TH, empty) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] > TH){
          empty.push(array[i]);
      }
   }
   return temps2;
}


console.log(hottestdays(temps1, value, temps2));

// point 3

let books = [
{
name: "book1",
ID: 1,
},
 {
    name: "book2",
    ID: 2,
  },
 {
    name: "book3",
    ID: 3,
   },
{
    name: "book4",           
    ID: 4,
},

];

let bookId = 2;


function getBookById(bookId, books) {
for (let i = 0; i < books.length; i++) {
    if (books[i].ID == bookId){
        return books[i]
    }
    


}
}

console.log(getBookById(bookId, books));





// Question 2 Point 1

let userinput = "";
let output = []

while (userinput !== "انتهيت"){
userinput = prompt("السلعه");
let price = prompt("السعر");
let quantity = prompt("الكميه");
let object = {
name: userinput,
price: price,
quantity: quantity,
};

 output.push(object);
 userinput = prompt("السلعة");
}

 for (let i = 0; i < output.length; i++) {
    console.log(output[i].quantity + 
        " "  
        + output[i].name + 
        " " 
        + output[i].quantity * output[i].price);
     totalprice =+ output[i].quantity * output[i].price

}

console.log(totalprice);










