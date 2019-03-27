import React from "react";
import { Head } from "./head";

export const Meta = title => {
  return (
    <>
      <Head props={title} />
      <style jsx global>{`
        body {
          margin: 20px 100px 20px 100px;
          color: #696969;
        }
      `}</style>
    </>
  );
};
