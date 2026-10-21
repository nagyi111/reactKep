import React from "react";
import { useState } from 'react';
import { imagesArr } from './data.js';
import Header from './components/Header.jsx';
import Photo from './components/Photo.jsx';
import Controls from './components/Controls.jsx';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="gallery">
      <Header current={currentIndex + 1} total={imagesArr.length} />
      <Photo imageUrl={imagesArr[currentIndex]} />
      <Controls setCurrentIndex={setCurrentIndex} total={imagesArr.length} />
    </main>
  );
}
