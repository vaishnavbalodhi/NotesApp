import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addNote } from "../store/notesSlice";

const Navbar = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addNoteHandler = (e) => {
        e.preventDefault();
        dispatch(addNote(input))
        setInput("");
    }

    return (
        <nav className="absolute top-[5%] w-1/2 translate-x-1/2 z-50">
            <div className="w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
                
                <form
                    onSubmit={addNoteHandler}
                    className="flex items-center justify-between gap-2"
                    action="">
                    <input
                        className="bg-zinc-600 rounded-2xl py-2 px-4 text-zinc-100 focus: outline-none"
                        placeholder="Add new"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit"><IoAdd 
                    size={50} className="border-4 rounded-full border-zinc-600 cursor-pointer"/></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar