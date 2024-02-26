import React from "react";
import Form from "./Form";
import Text from "./Text";
import Loader from "./Loader";

const Main = ({
  isLoading,
  name,
  setName,
  handleSubmit,
  handleChange,
  handleDelete,
  error,
  items,
}) => {
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Form name={name} setName={setName} handleSubmit={handleSubmit} />
      )}
      {!isLoading && (
        <Text
          items={items}
          name={name}
          handleChange={handleChange}
          handleDelete={handleDelete}
          error={error}
        />
      )}
    </>
  );
};

export default Main;
