import React, { useState, useEffect } from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todoList, setTodoList] = useState([]) // Puede recibir un array o lo  que sea
	const [todo, setTodo] = useState("");

	// UseEffect se ejecuta cada vez que se refresca la pagina.
	useEffect(() => {
		console.log("En el UseEffect");
	}, []);

	
	const handelChange= (event) => {
		setTodo(event.target.value);
	}

	const handelClick= (e) => {
		e.preventDefault();
		setTodoList([...todoList, todo]);
		e.target.reset();
	}

	const deleteTask = (e) => {
		let todoDel = [...todoList];
		todoDel.splice(e, 1);
		setTodoList(todoDel);
	}

	
	console.log(todo);
	console.log(todoList);

	return (
		<div>
			<h1>Todos</h1>
			<form onChange={handelChange} onSubmit={handelClick} >
				<input type="text" name= "new-todo"></input>
				<button type="submit" >Save Todo</button>
			</form>
			<ul>
				{todoList.map((todoprint, index) => {
					return (
					<li key={index}> {todoprint} <i onClick={()=>deleteTask(index)} className="fa-solid fa-xmark">X</i></li>)})}
			</ul>
			<p>Elementos en la lista: {todoList.length}</p>
		</div>
	);
};

export default Home;
