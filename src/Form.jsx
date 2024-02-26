import React from "react";

const Form = ({ name, setName, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <label htmlFor="item">Item name:</label>
      <br />
      <input
        type="text"
        id="item"
        placeholder="Enter Item..."
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
        autoFocus
      />
      <br />
    </form>
  );
};

export default Form;
