import React from "react";
import NotFoundBlock from "../components/NotFoundBlock";
import Header from "../components/Header";

export const NotFound = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <NotFoundBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
