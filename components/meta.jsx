import React from "react";
import Head from "./head";

export default title => (
  <>
    <Head props={title} />
    <style jsx global>{`
      body {
        background: #e6e6fa;
        font: 11px menlo;
        color: #696969;
      }
    `}</style>
  </>
);
