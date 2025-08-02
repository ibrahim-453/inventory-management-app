import { createContext, useContext, useEffect, useState } from "react";

export const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {

  const [item, setItem] = useState(() => {
    try {
      const data = localStorage.getItem("item");
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error("Error parsing localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  const createItem = (name, category, quantity, price) => {
    const addItem = {
      id: crypto.randomUUID(),
      name,
      category,
      quantity,
      price,
      createdAt: new Date().toLocaleDateString(),
    };
    setItem((prev) => [...prev, addItem]);
  };

  const editItem = (id, name, category, quantity, price) => {
    const updatedItem = item.map((data) =>
      data.id === id
        ? {
            ...data,
            name,
            category,
            quantity,
            price,
            updatedAt: new Date().toLocaleDateString(),
          }
        : data
    );
    setItem(updatedItem);
  };

  const deleteItem = (id) => {
    const deletedItem = item.filter((data) => data.id !== id);
    setItem(deletedItem);
  };

  return (
    <InventoryContext.Provider
      value={{ item, setItem, createItem, editItem, deleteItem }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
