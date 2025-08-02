import React from 'react'
import { useInventory } from '../context/InventoryContext'

function Dashboard() {
  const { item } = useInventory()
  const instock = item.filter((data) => data.quantity >= 50)
  const outstock = item.filter((data) => data.quantity < 50)

  return (
    <div className="px-4 py-10 sm:px-10 bg-zinc-800 min-h-screen text-white space-y-8 rounded-4xl border-3 border-pink-500">
      <div className="w-full rounded-xl bg-pink-800 shadow-lg p-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Inventory Dashboard
          </h3>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-green-600 rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Items In Stock</h3>
          <p className="text-4xl font-bold">{instock.length}</p>
        </div>
        <div className="bg-red-600 rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Items Out of Stock</h3>
          <p className="text-4xl font-bold">{outstock.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
