import { useState } from "react";

const allItems = [
  { id: "apple", value: "Apple" },
  { id: "orange", value: "Orange" },
  { id: "grape", value: "Grape" },
  { id: "pear", value: "Pear" },
];

function App() {
  const [items, setItems] = useState(allItems); // useState helps us make update to our UI.

  const addItems = () => {
    const itemsIds = items.map((item) => item.id);
    const itemToAdd = allItems.filter((item) => !itemsIds.includes(item.id));
    if (itemToAdd) {
      setItems([...items, ...itemToAdd]);
    }
  };

  const removeItem = (id: string) => {
    const filteredItems = items.filter((item) => item.id !== id);
    if (filteredItems) {
      setItems([...filteredItems]);
    }
  };

  return (
    <>
      <button disabled={items.length >= allItems.length} onClick={addItems}>
        add Item
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => removeItem(item.id)}>remove</button>
            {item.value}
            <input type="text" defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

// This example clearly shows. What happens if we don't provide the key value to items. Just remove key value and see for your self how functionality don't work as they should
