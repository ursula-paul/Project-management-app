import React, { useState } from "react";
// import * as React from "react";
import InputField from "./componets/InputField";
import { TodoList } from "./componets/TodoList";
import { Todo } from "./componets/model";
import "./App.css";

// interface Todo  {
// 	todo:String;
// }
const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}

		console.log(todos);
	};
	return (
		<div className="App">
			<span className="heading">Todo App</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
