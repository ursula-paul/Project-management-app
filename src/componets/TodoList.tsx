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
	completedTodos,
	setCompletedTodos,
}: Props): JSX.Element => {
	const renderCompletedTodos = () => {
		return completedTodos.map((todo, index) => (
			<SingleTodo
				todo={todo}
				todos={completedTodos}
				key={todo.id}
				setTodos={setCompletedTodos}
				index={index}
			/>
		));
	};
	return (
		<div className="container">
			<Droppable droppableId="TodosList">
				{(provided, snapshot) => (
					<div
						className={`todos  ${snapshot.isDraggingOver ? "dragactive" : ""}`}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todos__heading">Active Tasks</span>
						{todos.length > 0 &&
							todos.map((todo, index) => (
								<SingleTodo
									index={index}
									todo={todo}
									todos={todos}
									key={todo.id}
									setTodos={setTodos}
								/>
							))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>

			<Droppable droppableId="TodosRemove">
				{(provided, snapshot) => (
					<div
						className={`todos remove ${
							snapshot.isDraggingOver ? "dragcomplete" : ""
						}`}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todos__heading">Completed Tasks</span>
						{completedTodos.length > 0 && renderCompletedTodos()}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};
