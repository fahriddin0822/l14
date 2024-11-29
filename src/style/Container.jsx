import React from "react";

export default function Container({ children }) {
  return (
    <div style={{ maxWidt: "1240px", margin: "0 auto", padding: "0 20px" }}>
      {children}
    </div>
  );
}
