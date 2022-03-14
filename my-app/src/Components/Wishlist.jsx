import React from 'react'

function Wishlist() {
    const [query,setQuery] = React.useState("")
    const [items,setItems] = React.useState([])

    const updateInput = (event) =>{
       const { value } = event.target
       setQuery(value)
    }

    
    const addItems = () => {
        let List = [...items,query]
        setItems(List) 
    }

    if(items.length > 3){
       return <h1>You cannot add more than 3 items to wishlist</h1>
    }

  

     
  return (
    <>
    <h1>Wishlist</h1>
    <input placeholder="Enter Item"  onChange={updateInput} vlaue ={query}/>
    <button onClick={addItems}>ADD</button>
    {
       items.map((el) => 
       <div>{el}</div>
       )
       
    }

    </>
  )
}

export default Wishlist