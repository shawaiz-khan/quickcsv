import { useState, useEffect } from "react";
import { Instagram } from 'lucide-react';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim()) {
      setItems([...items, item]);
      setItem('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleClear = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleDownloadCSV = () => {
    const csvContent = items.map(item => `"${item}"`).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'items.csv');
    a.click();
  };

  const handleFollow = () => {
    window.open("https://www.instagram.com/shawaizkhan.dev/", "_blank");
  };

  const handleClearList = () => {
    setItems([]);
  };

  return (
    <main className="w-96 h-fit bg-white p-5 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">QuickCSV</h1>
        <div
          className="cursor-pointer w-full text-purple-500 ml-3"
          onClick={handleFollow}
        >
          <Instagram />
        </div>
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:border-purple-500 focus:outline-none"
          type="text"
          placeholder="Add item"
          value={item}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-purple-500 text-white hover:bg-purple-600 rounded-md px-3 py-2"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      {items.length > 0 && (
        <div className="mt-4">
          <ul className="w-full max-h-60 overflow-y-auto border border-gray-300 rounded-md">
            {items.map((i, index) => (
              <li key={index} className="border-b py-2 px-3 flex justify-between items-center hover:bg-gray-100">
                <span>{i}</span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1"
                  onClick={() => handleClear(index)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-1 mt-3">
            <button
              className="mt-3 bg-purple-500 hover:bg-purple-600 w-full py-2 rounded-md text-white"
              onClick={handleDownloadCSV}
            >
              Download CSV
            </button>
            <button
              className="mt-3 bg-red-500 hover:bg-red-600 w-full py-2 rounded-md text-white"
              onClick={handleClearList}
            >
              Clear List
            </button>
          </div>
        </div>
      )}
    </main>
  );
}