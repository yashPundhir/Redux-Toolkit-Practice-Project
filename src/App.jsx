import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
	return (
		<div>
			<h1 className="text-red-500 font-semibold bg-black px-6 py-2 rounded-xl">
				Redux Toolkit Practice Project
			</h1>
			<AddTodo />
		</div>
	);
}

export default App;
