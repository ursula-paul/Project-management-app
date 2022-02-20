import React, { useState } from "react";
import { Todo } from "./model";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCheckmarkDone } from "react-icons/io5";
import "./Style.css";

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);
	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();

		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
		);
		setEdit(false);
	};

	const first = useRef(second);

	return (
		<form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
			{edit ? (
				<input
					value={editTodo}
					onChange={(e) => setEditTodo(e.target.value)}
					className="todos__single--text"
				/>
			) : todo.isDone ? (
				<s className="todos__single--text">{todo.todo}</s>
			) : (
				<span className="todos__single--text">{todo.todo}</span>
			)}

			<div>
				<span
					className="icon"
					onClick={() => {
						if (!edit && !todo.isDone) {
							setEdit(!edit);
						}
					}}
				>
					<FiEdit />
				</span>
				<span className="icon">
					<span className="icon" onClick={() => handleDelete(todo.id)}></span>
					<AiOutlineDelete />
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					<IoCheckmarkDone />
				</span>
			</div>
		</form>
	);
};
