import { AiFillDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from "react-icons/ai"
import { useDispatch } from "react-redux";
import {
    cancelDeleteTodo, cancelEditTodo, completedTodo, confirmDeleteTodo,
    deleteTodo, editTodo, enableEditTodo
} from "../features/todo";

export default function TodoList(props) {

    const { todoIndex } = props

    const dispatch = useDispatch()

    const handleDeleteClick = () => {
        dispatch(deleteTodo(todoIndex))
    }

    const handleCheckboxChange = () => {
        dispatch(completedTodo(todoIndex))
    }
    const handleConfirmClick = () => {
        dispatch(confirmDeleteTodo(todoIndex))
    }

    const handleCancelClick = () => {
        dispatch(cancelDeleteTodo(todoIndex))
    }
    const handleEnableEditClick = () => {
        dispatch(enableEditTodo(todoIndex))
    }

    const handleEditClick = (event) => {
        dispatch(editTodo({ todoIndex: todoIndex, value: event.target.value }))
    }

    const handleCancelEdit = () => {
        dispatch(cancelEditTodo(todoIndex))
    }
    return (
        <div className="border-b border-[#bebebe] text-gray-800 py-4">
            <div className="flex gap-4 relative" >
                <input type="checkbox" checked={props.isChecked} onChange={handleCheckboxChange} />
                {props.isEditing ?
                    <input type="text" defaultValue={props.value} className="bg-gray-200 p-1 outline-none" onBlur={handleEditClick} /> :
                    <p className={`text-xl break-words w-[80%] sm:w-[85%] ${props.isChecked ? "line-through" : "no-underline"}`}>
                        {props.value}
                    </p>
                }

                <div className="absolute top-0 right-0 flex gap-3">
                    {props.isEditing ?
                        <span className="rounded-full cursor-pointer bg-gray-200 p-1" onClick={handleCancelEdit}>
                            <AiOutlineClose color="#ff2700" fontSize={22} />
                        </span>
                        :
                        <span className="rounded-full bg-gray-200 cursor-pointer p-1">
                            <AiFillEdit color="#008f94" fontSize={22} onClick={handleEnableEditClick} />
                        </span>
                    }
                    {!props.isDeleting ?
                        <span className="rounded-full bg-gray-200 cursor-pointer p-1">
                            <AiFillDelete color="#ff2700" fontSize={22} onClick={handleDeleteClick} />
                        </span>
                        :
                        <div className="flex gap-3 cursor-pointer">
                            <span className="bg-[#008f94] rounded-full p-1" onClick={handleConfirmClick}>
                                <AiOutlineCheck color="white" fontSize={21} />
                            </span>
                            <span className="rounded-full bg-gray-200 p-1" onClick={handleCancelClick}>
                                <AiOutlineClose color="#ff2700" fontSize={22} />
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}