import React from "react";
import Error from "./Error";
import List from "./List";

const Text = ({ items, error, handleChange, handleDelete }) => {
  return (
    <>
      <main className="content">
        <h2>Shopping List</h2>
        {!error ? (
          <ul>
            <List
              items={items}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          </ul>
        ) : (
          <Error error={error} />
        )}
      </main>
    </>
  );
};

export default Text;
