import React,{useContext} from 'react'
import NotesContext from '../context/notes-context'

const Note = ({note}) => {
  const {dispatch} = useContext(NotesContext)
    return (
        <tr key={note.title}>
        <td style={{ width: "40%" }}>{note.title}</td>
        <td>{note.body}</td>
        <td style={{ width: "3%" }}>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => dispatch({type:'REMOVE_NOTE', title: note.title})}
          >
            <i className="far fa-times"></i>
          </button>
        </td>
      </tr>
    )
}

export default Note

// const removeNote = (title) => {
//   // setNotes(notes.filter((note) => note.title != title));
//   dispatch({
//     type: "REMOVE_NOTE",
//     title,
//   });
// };