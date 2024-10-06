import { useState } from "react";

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

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
    console.log(url)
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'items.csv');
    a.click();
  };

  const handleFollow = () => {
    window.open("https://www.instagram.com/shawaizkhan.dev/", "_blank");
  };

  return (
    <main className="w-96 h-fit bg-neutral-100 px-3 py-5 flex flex-col shadow-md items-start justify-center gap-3">
      <div className="w-full flex gap-3">
        <input
          className="border border-gray-900 rounded-md px-3 py-1 w-full focus:border-purple-600 focus:outline-none"
          type="text"
          placeholder="add item"
          value={item}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-purple-500 w-1/2 text-neutral-100 hover:bg-purple-600 border border-purple-500 rounded-md px-3 py-1 focus:border-purple-600 focus:outline-none"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      {items.length > 0 && (
        <div className="w-full">
          <ul className="mt-3 w-full overflow-y-auto max-h-72">
            {items.map((i, index) => (
              <li key={index} className="border-b py-1 flex justify-between items-center">
                {i}
                <button
                  className="bg-red-500 hover:bg-red-600 px-3 text-neutral-100 rounded-md"
                  onClick={() => handleClear(index)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button
              className="mt-3 bg-purple-500 hover:bg-purple-600 w-full py-2 rounded-md text-neutral-100"
              onClick={handleDownloadCSV}
            >
              Download CSV
            </button>
            <button
              className="mt-3 bg-purple-500 hover:bg-purple-600 w-full py-2 rounded-md text-neutral-100"
              onClick={handleFollow}
            >
              Follow on Instagram
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;