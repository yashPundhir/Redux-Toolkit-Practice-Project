import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
	return (
		<div>
			<h1 className="text-red-500 font-semibold bg-black px-6 py-2 rounded-xl">
				Redux Toolkit Practice Project
			</h1>
			<AddTodo />
			<Todos />
		</div>
	);
}

export default App;
