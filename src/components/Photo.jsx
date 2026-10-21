import React from "react";

export default function Photo({ imageUrl }) {
  return <img className="gallery-photo" src={imageUrl} alt="Tájkép" />;
}
