import React from "react";
import ListInput from "./ListInput";
import ListName from "./ListName";
import ListBtn from "./ListBtn";

const ListItem = ({ item, handleChange, handleDelete }) => {
  return (
    <>
      <li key={item.id}>
        <ListInput handleChange={handleChange} item={item} />
        <ListName item={item} />
        <ListBtn handleDelete={handleDelete} item={item} />
      </li>
    </>
  );
};

export default ListItem;
