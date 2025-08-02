import { Plus, Edit2, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useInventory } from "../context/InventoryContext";

function InventoryManager() {
  const { item, deleteItem } = useInventory();
  const navigate = useNavigate()

  const handleDelete = (id) => {
    deleteItem(id);
  }
  const handleEdit = (id) => {
  navigate(`/editinventory/${id}`);
};

  return (
    <div className="px-4 py-10 sm:px-10 bg-zinc-800 min-h-screen rounded-4xl border-3 border-pink-500">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="w-full rounded-xl bg-pink-800 shadow-lg p-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Inventory Manager
          </h3>
        </div>

        <div className="flex justify-end mb-4">
          <Link
            to="/addinventory"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-900 text-white font-semibold shadow-md transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            Add Item
          </Link>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-pink-100 text-sm text-gray-700 font-bold">
              <tr className="text-center">
                <th className="px-6 py-3">Sr.</th>
                <th className="px-6 py-3">Item Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Created At</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-center text-gray-800 text-sm">
              {item.length === 0 ? (
                <tr>
                  <td className="px-6 py-4 text-center" colSpan="7">
                    No items found.
                  </td>
                </tr>
              ) : (
                item.map((data, index) => (
                  <tr key={data.id} className="hover:bg-pink-50 transition">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{data.name}</td>
                    <td className="px-6 py-4">{data.category}</td>
                    <td className="px-6 py-4">{data.quantity}</td>
                    <td className="px-6 py-4">{data.price}</td>
                    <td className="px-6 py-4">{data.createdAt}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleDelete(data.id)}
                          className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full text-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                        <button
                          onClick={()=> handleEdit(data.id)}
                          className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-sm"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InventoryManager;
