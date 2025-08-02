import {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useInventory } from '../context/InventoryContext'

function EditStock() {
  const {id} = useParams()
  const {editItem,item} = useInventory()
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate()

  const currentItem = item.find((data)=>data.id==id)

  useEffect(()=>{
    if(currentItem){
      setName(currentItem.name)
      setCategory(currentItem.category)
      setQuantity(currentItem.quantity)
      setPrice(currentItem.price)
    }
  },[id,item])

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !category || !quantity || !price) {
      alert("Please fill all the fields");
      return;
    }
    editItem(id,name, category, quantity, price);
    navigate("/inventory")
  };
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-10 text-white">
      <div className="max-w-xl mx-auto space-y-6 bg-zinc-800 p-6 rounded-xl shadow-md">
        <h3 className="text-3xl font-bold text-pink-400">Edit Stock</h3>
        <form onSubmit={handleUpdate} className="space-y-4">
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
            Update Item
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditStock