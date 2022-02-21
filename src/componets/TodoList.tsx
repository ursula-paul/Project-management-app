import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "./model";
import { SingleTodo } from "./SingleTodo";
import "./Style.css";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({
	todos,
	setTodos,
}: Props): JSX.Element => {
	return (
		<div className="container">
			<Droppable>
				<div className="todos">
					<span className="todos__heading">Active Tasks</span>
					{todos.map((todo) => (
						<SingleTodo
							todo={todo}
							todos={todos}
							key={todo.id}
							setTodos={setTodos}
						/>
					))}
				</div>
			</Droppable>
			<div className="todos remove">
				<span className="todos__heading">Completed Tasks</span>
				{todos.map((todo) => (
					<SingleTodo
						todo={todo}
						todos={todos}
						key={todo.id}
						setTodos={setTodos}
					/>
				))}
			</div>
		</div>
	);
};
