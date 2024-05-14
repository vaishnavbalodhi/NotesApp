import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, updateNote } from "../store/notesSlice";

const Card = ({reference, note}) => {
    const [ishovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // const notes = useSelector(state => state.notes)

    const dispatch = useDispatch();

    const removeNoteHandler = () => {
        // console.log(nid)
        dispatch(removeNote(note.id))
    }

    const updateNoteHandler = () => {
        dispatch(note.update = true)
        dispatch(updateNote(note.update))
    }

  return (
    <motion.div drag 
    dragConstraints={reference} 
    whileDrag={{scale: 1.1}}
    dragElastic={0.1}
    dragTransition={{bounceStiffness: 100, bounceDamping: 50}}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className='relative w-60 h-72 rounded-[40px] bg-zinc-900/80 text-zinc-100 p-8 overflow-hidden'>
        {/* <div className="header absolute top-0 left-0 bg-sky-200 w-full h-12 py-3 px-5"></div> */}
        <FaRegFileAlt />
        <p className="text-sm font-semibold mt-5 leading-tight">{note.text}</p>
        <div className="footer absolute bottom-0 left-0 bg-sky-200 w-full h-12 py-3 px-5 flex justify-between items-center">
            {ishovered && (
                <div className="w-full flex items-center gap-12 justify-center">
                <button 
                onClick={() => updateNoteHandler()}
                className="text-sm rounded-full border-2 border-zinc-100 text-zinc-100 py-1 px-2 hover:bg-zinc-100 hover:text-sky-200 font-semibold">Update</button>
                <button 
                onClick={() => removeNoteHandler()}
                className="text-sm rounded-full border-2 border-zinc-100 text-zinc-100 py-1 px-2 hover:bg-zinc-100 hover:text-sky-200 font-semibold">Delete</button>
                {/* <TiDeleteOutline size={42}/> */}
                </div>
            ) }
        </div>
    </motion.div>
  )
}

export default Card