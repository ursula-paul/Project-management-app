import React from "react";
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
	return (
		<form className="todos__single">
			<span className="todos__single--text">{todo.todo}</span>

			<div>
				<span className="icon">
					<FiEdit />
				</span>
				<span className="icon">
					<AiOutlineDelete />
				</span>
				<span className="icon">
					<IoCheckmarkDone />
				</span>
			</div>
		</form>
	);
};
