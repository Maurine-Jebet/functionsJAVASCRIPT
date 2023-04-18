//You manage a grocery store and need to keep track of the inventory of
// various items. You will use arrays to store the data and various functions to
 //manipulate and analyze the data. 
//1.Create an array containing the names of all items in the 
//inventory maximum of 10.
 let inventory = ("onions","cabbage","tomatoes","kales","cucumber","bananas","orange","apple","maize","carrots")





// //2.Create a separate array with the corresponding stock quantities 
// //of each item 
// //maximum of 10.
 const inventor =(10,20,30,40,50,60,70,80,90,100)
 





//3.Write a function to add a new item to the inventory, updating both arrays.
// function invent();
const invent = ["onions","cabbage","tomatoes","kales","cucumber","bananas","orange","apple","maize","carrots"];
quantity = [10,20,30,40,50,60,70,80,90,100]
function additems(invent,quantity){
    invent.push("car")
    console.log(invent)
    quantity.push(11)
    console.log(quantity)
}
additems(invent,quantity)
//invent.unshift("spinach");
//console.log(invent)






//4.Write a function to update the stock quantity of an existing item.
// function quantity ()
function updating (newQuantity,itemName){
    const index = inventory.indexOf(itemName);
    if(index!== -1){
        quantityStock(index)= newQuantity;

    }else{
        console.log("item not found in inventory")
    }
}







//5.Write a function to calculate the total number of items 
//in the inventory.

function vegetables(inventory) {
    let totalVegetables = (inventory.length);
    console.log(totalVegetables);
}
vegetables(inventory)









//6.Write a function to find the item with the lowest stock quantity.
function lowestQuantity(){
  
    console.log(Math.min(...quantity))
}
lowestQuantity()