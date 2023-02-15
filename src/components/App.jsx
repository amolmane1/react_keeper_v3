import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = React.useState([]);

  function handleAdd(noteData) {
    setNotes([...notes, noteData]);
  }

  function handleDelete(id) {
    setNotes(
      notes.filter((note, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
