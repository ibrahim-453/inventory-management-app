// import React, { useState } from 'react'
// import { useInventory } from '../context/InventoryContext'
// import { useFormStatus } from 'react-dom'
// import { Link } from 'react-router-dom'

// function AddStock() {
//   const {createInventory} = useInventory()
//   const [name,setName] = useState("")
//   const [category,setCategory] = useState("")
//   const [quantity,setQuantity] = useState("")
//   const [price,setPrice] = useState("")
//   const {pending} = useFormStatus()

//   const handleSubmit=()=>{
//     if(name == "" || category == "" || quantity == "" || price == "" ){
//       alert("Please Fill All The Fields ")
//     }
//     else{
//       createInventory(name,category,quantity,price)
//       setName("")
//       setCategory("")
//       setQuantity("")
//       setPrice("")
//     }
//   }
//   return (
//     <div>
//       <div>
//         <div>
//           <h3>Add Stock</h3>
//         </div>
//         <div>
//           <Link to="/inventory">Check Inventory</Link>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder='Type Name' value={name} onChange={(e)=>setName(e.target.value)} />
//           <input type="text" placeholder='Type Category Name' value={category} onChange={(e)=>setCategory(e.target.value)}/>
//           <input type="number" placeholder='Enter Quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
//           <input type="text" placeholder='Enter Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
//           <button type='submit'  disabled={pending}> {pending ? "Adding" : "AddItem"}</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AddStock
import React, { useState } from "react";
import { useInventory } from "../context/InventoryContext";
import { Link, useNavigate } from "react-router-dom";

function AddStock() {
  const { createItem } = useInventory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !quantity || !price) {
      alert("Please fill all the fields");
      return;
    }
    createItem(name, category, quantity, price);
    setName("");
    setCategory("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-10 text-white">
      <div className="max-w-xl mx-auto space-y-6 bg-zinc-800 p-6 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-pink-400">Add Stock</h3>
        <Link
          to="/inventory"
          className="text-sm text-pink-300 hover:underline"
        >
          ← Check Inventory
        </Link>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Type Name"
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Type Category"
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-2 rounded bg-zinc-700 text-white"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-800 px-4 py-2 rounded text-white font-semibold"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStock;
