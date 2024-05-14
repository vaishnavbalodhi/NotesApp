import { useRef } from "react"
import Card from "./Card"
import { useSelector } from "react-redux";


const Foreground = () => {

    const notes = useSelector(state => state.notes)

    const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="fixed top-0 left-0 z-20 w-full h-full p-5">
        <div className="flex gap-10 flex-wrap">
            {notes.map((note) => (<Card key={note.id} note = {note} reference={containerRef}/>))}
        </div>
    </div>
  )
}

export default Foreground