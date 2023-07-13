import { useState } from "react";
import "./App.css";

function App() {
	const [show, setShow] = useState("true");
	console.log(typeof show);
	console.log(typeof show);
	return (
		<>
			<p>show: {show.toString()}</p>
			<button onClick={() => setShow(true)}>Show</button>
			<button onClick={() => setShow(false)}>Hide</button>
		</>
	);
}

export default App;
