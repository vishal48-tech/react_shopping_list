import React from "react";
import ListItem from "./ListItem";

const List = ({ items, handleChange, handleDelete }) => {
  return (
    <>
      {items.length ? (
        items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleChange={handleChange}
          />
        ))
      ) : (
        <h1>No items to display</h1>
      )}
    </>
  );
};

export default List;
