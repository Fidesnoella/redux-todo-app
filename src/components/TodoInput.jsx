import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo";

export default function TodoInput() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') return handleClick()
    }

    const handleClick = () => {
        if (!text.trim()) return;
        dispatch(addTodo(text))
        setText('');

    };

    return (
        <div>
            <input type="text" placeholder="Add todo..." className="placeholder-gray-800 mt-10 pl-6 pr-16 py-4 outline-none border border-[#bebebe] shadow rounded-full w-full"
                onChange={handleChange} onKeyDown={handleKeyDown}
                value={text}
            />
            <span className="absolute bottom-3 right-4 rounded-full bg-[#008f94] cursor-pointer p-2" onClick={handleClick}>
                <AiOutlinePlus color="white" fontSize={18} />
            </span>
        </div>
    );
}
