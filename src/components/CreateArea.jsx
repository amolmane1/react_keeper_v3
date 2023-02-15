import React from "react";

function CreateArea(props) {
  var [noteData, setNoteData] = React.useState({ title: "", content: "" });

  function handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;

    setNoteData((prevValue) => {
      return { ...noteData, [name]: value };
    });
  }

  return (
    <div>
      <form
      // onSubmit={(event) => {
      //   props.onAdd(noteData);
      //   setNoteData({ title: "", content: "" });
      //   event.preventDefault();
      // }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteData.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteData.content}
        />
        {/* <button type="submit">Add</button> */}
        <button
          onClick={(event) => {
            props.onAdd(noteData);
            setNoteData({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
