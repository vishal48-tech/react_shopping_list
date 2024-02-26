import React from "react";

const ListName = ({ item }) => {
  return (
    <>
      <p
        style={
          item.checked
            ? {
                textDecoration: "line-through",
                textDecorationColor: "red",
              }
            : null
        }
      >
        {item.name}
      </p>
    </>
  );
};

export default ListName;
