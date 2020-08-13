import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>cat memes!</h1>
      <div><img src="https://i.ytimg.com/vi/zYkQxq52uL8/hqdefault.jpg" /></div>
      <div><img src="https://i.pinimg.com/originals/65/2f/91/652f91e79a123904bf66833d73e3ca9f.jpg" /></div>
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
