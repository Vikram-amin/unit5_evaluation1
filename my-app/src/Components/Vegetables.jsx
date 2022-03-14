import React from 'react'

function Vegetables() {

    let vegitablesList = [
        {
        id :0,
        name : "tomatoes",
        quantity : 10,
     },
     {
        id :1,
        name : "potatoes",
        quantity : 8,
     },
     {
        id :2,
        name : "carrots",
        quantity : 5,
     },
     {
        id :3,
     name : "onions",
     quantity : 7,
  }
 ]

 const [items,setItems] = React.useState(vegitablesList);


 function increment(id){
    // console.log(id)
  let newItems =[...items];
  newItems[id] = {...items[id], quantity:items[id].quantity+1};
  setItems(newItems)
}

function decrement(id){
  //  console.log(id)
 let newItems =[...items];
 newItems[id] = {...items[id],quantity:items[id].quantity-1};

 setItems(newItems)
}


  return (
      <>
    <h1>Vegetables</h1>
    {
       items.map(({name,quantity,id}) => 
       <div> 
       <div >{`${name} - ${quantity}`}</div>
       <button counts={quantity} onClick={ () => increment(id)} >+</button>
       <button counts={quantity} onClick={ () => decrement(id)} >-</button>
     
       </div>

      
       
       )
       
    }
    </>
  )
}

export default Vegetables