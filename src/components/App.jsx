import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function setNot(newNote) {
    setNote((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function delet(key) {
    console.log("delete invoked");

    setNote((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== key;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={setNot} />
      {note.map((items, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            del={delet}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
