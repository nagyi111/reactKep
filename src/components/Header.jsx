import React from "react";

export default function Header({ current, total }) {
  return (
    <header className="gallery-header">
      <h1>Fotógaléria</h1>
      <span>Kép {current} / {total}</span>
    </header>
  );
}
