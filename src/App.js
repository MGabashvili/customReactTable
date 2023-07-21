import "./App.css";
import DATA from "./database/gsLosses";
import GSLossesTable from "./components/GSLossesTable/GSLossesTable";
import Header from "./components/Header/header";

function App() {
	function handleClick(e) {
		let table = e.target.closest("div.tableContainer").querySelector("table");
		table.hidden = !table.hidden;
	}

	return (
		<>
			<Header />
			<div className="tableContainer">
				<button onClick={handleClick}>Show/Hide Table</button>
				<input type="text" className="textInput"/>
				{<GSLossesTable gsLosses={DATA} />}
			</div>
		</>
	);
}

export default App;
