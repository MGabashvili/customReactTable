import "./App.css";
import DATA from "./database/gsLosses";
import GSLossesTable from "./components/container/GSLossesTable";


function App() {
	
	function handleClick(e) {
		let table = e.target.closest('div.tableContainer').querySelector('table');
		table.hidden = !table.hidden;
	}

	return (
		<div className="tableContainer">		
			<button onClick={handleClick}>Show/Hide Table</button>
			{<GSLossesTable gsLosses={DATA} />}			
		</div>
		
	);
}

export default App;
