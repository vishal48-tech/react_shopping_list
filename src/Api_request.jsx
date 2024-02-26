const Api_request = async (uri = "", method = null, errMsg = null) => {
  try {
    const response = await fetch(uri, method);
    if (!response.ok) throw Error("Error: Request Failed");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default Api_request;
