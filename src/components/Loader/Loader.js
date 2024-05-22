import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <Spinner
      color="primary"
      style={{
        height: "3rem",
        width: "3rem",
      }}
      className="position-absolute top-50 start-50 translate-middle"
    >
      Loading...
    </Spinner>
  );
};

export default Loader;
