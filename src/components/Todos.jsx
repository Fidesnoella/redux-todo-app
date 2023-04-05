import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import { useSelector } from "react-redux"

export default function Todos() {

    const todos = useSelector(state => state.todos)

    return (
        <main className="flex flex-col items-center mt-10 sm:mt-20 mx-auto container">
            <h1 className="text-[#bebebe] font-bold text-6xl sm:text-8xl">todos</h1>
            <div className="w-full sm:w-1/2 px-6 sm:px-0">
                <div className="relative">
                    <TodoInput />
                </div>
                <div className="w-full flex flex-col gap-3 pt-8 px-2">
                    {
                        todos.map(({ value, isChecked, isDeleting, isEditing }, index) => {
                            return (
                                <TodoList
                                    key={index}
                                    todoIndex={index}
                                    isChecked={isChecked}
                                    value={value}
                                    isDeleting={isDeleting}
                                    isEditing={isEditing}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

