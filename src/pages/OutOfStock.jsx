import React from 'react'
import { useInventory } from '../context/InventoryContext'

function OutOfStock() {
  const { item } = useInventory()
  const availableItems = item.filter((data) => data.quantity <= 50)

  return (
    <div className="px-4 py-10 sm:px-10 bg-zinc-800 min-h-screen text-white rounded-4xl border-3 border-pink-500 space-y-8">
       <div className="w-full rounded-xl bg-pink-800 shadow-lg p-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Out Of Stock Items
          </h3>
        </div>

      {availableItems.length > 0 ? (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-300 bg-white text-black">
            <thead className="bg-pink-100 text-black">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Sr.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Item Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Quantity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 ">
              {availableItems.map((data, index) => (
                <tr key={data.id || index} className="hover:bg-pink-100 transition">
                  <td className="px-4 py-3 text-sm">{index + 1}</td>
                  <td className="px-4 py-3 text-sm">{data.name}</td>
                  <td className="px-4 py-3 text-sm">{data.category}</td>
                  <td className="px-4 py-3 text-sm">{data.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-10 bg-pink-100 rounded-xl text-pink-700 font-semibold text-lg shadow-inner">
          No item is Out Of Stock
        </div>
      )}
    </div>
  )
}

export default OutOfStock
