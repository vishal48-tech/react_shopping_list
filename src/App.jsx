import React, { useEffect, useState } from "react";
import Main from "./Main";
import Api_request from "./Api_request";

const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URI = "http://localhost:3500/items";

  // Load Items
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URI);
        const storedItems = await response.json();
        setItems(storedItems);
        setError("");
      } catch (err) {
        setError("Error: Can't load data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add Item
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = items.length
      ? (parseInt(items[items.length - 1].id) + 1).toString()
      : "1";
    const newItem = { id, name, checked: false };
    const listItems = [...items, newItem];
    setItems(listItems);

    const addDetail = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    };

    const response = await Api_request(API_URI, addDetail);
    if (response) setError(response);

    setName("");
  };

  // Update Item
  const handleChange = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const updatedItem = listItems.filter((item) => item.id === id);
    const updateDetail = {
      method: "PATCH",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: updatedItem[0].checked }),
    };
    const update_URI = `${API_URI}/${id}`;
    const response = await Api_request(update_URI, updateDetail);
    if (response) console.log(response);
  };

  // Delete Item
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteDetail = { method: "DELETE" };
    const delete_URI = `${API_URI}/${id}`;

    const response = await Api_request(delete_URI, deleteDetail);
    if (response) console.log(response);
  };

  // Display
  return (
    <>
      <Main
        isLoading={isLoading}
        name={name}
        setName={setName}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleDelete={handleDelete}
        error={error}
        items={items}
      />
    </>
  );
};

export default App;
