import React, { useRef, useEffect, useState } from "react";

export default function GSLossesTable(props) {
	const [ascending, setAscending] = useState(false);

	useEffect(() => {
		let tableStyle = {};
		//event for sorting the table
		myRef.current.addEventListener("mouseover", (e) => {
			let target = e.target;
			if ((target.tagName === "TH" || target.tagName === "TD") && target.closest("tr").rowIndex !== 0) {
				const targetCellIndex = target.cellIndex;
				Array.from(myRef.current.tBodies[0].rows).forEach((row) => {
					Array.from(row.cells).forEach((cell) => {
						if (cell.cellIndex === targetCellIndex) {
							cell.style.backgroundColor = "#b0ddc2";
						}
					});
				});
				Array.from(target.closest("tr").cells).forEach((cell) => {
					cell.style.backgroundColor = "#b0ddc2";
				});
				target.style.backgroundColor = "#46a46c";
			}
		});

		myRef.current.addEventListener("mouseout", (e) => {
			let target = e.target;
			if ((target.tagName === "TH" || target.tagName === "TD") && target.closest("tr").rowIndex !== 0) {
				const targetCellIndex = target.cellIndex;
				Array.from(myRef.current.tBodies[0].rows).forEach((row) => {
					Array.from(row.cells).forEach((cell) => {
						if (cell.cellIndex === targetCellIndex) {
							cell.style.backgroundColor = "";
						}
					});
				});
				Array.from(target.closest("tr").cells).forEach((cell) => {
					cell.style.backgroundColor = "";
				});
				target.style.backgroundColor = "";
			}
		});

		Array.from(myRef.current.rows).forEach((row) => {
			Array.from(row.cells).forEach((cell) => {
				let cellContent = Number.parseFloat(cell.textContent);
				if (cellContent && cellContent < 0) {
					cell.style.color = "red";
				}

				if ((tableStyle.maxCellWidth || 0) < cell.offsetWidth) {
					tableStyle.maxCellWidth = cell.offsetWidth;
				}
			});
			Array.from(row.cells).forEach((cell) => {
				cell.style.width = tableStyle.maxCellWidth + "px";
				
				if (cell.cellIndex > 1 && row.rowIndex !== 0) {
					cell.style.textAlign = "right";
				}
			});
		});
	}, []);

	// making table for gsLosses
	const myRef = useRef(null);
	const data = props.gsLosses;
	let theads = [];
	for (let prop in data[0]) {
		theads.push(<th>{prop}</th>);
	}
	theads.push(<th>Total</th>);
	let rows = [];
	data.forEach((station) => {
		let td = [];
		let total = 0;
		for (let prop in station) {
			td.push(<td>{station[prop]}</td>);
			if (Number.parseFloat(station[prop])) {
				total += Number.parseFloat(station[prop]);
			}
		}
		td.push(<td>{total}</td>);
		rows.push(<tr>{td}</tr>);
	});

	function handleSorting(e) {
		const target = e.target;
		if (target.tagName === "TH" && target.closest("tr").rowIndex === 0) {
			let bodyRows = Array.from(myRef.current.tBodies[0].rows);

			if (target.cellIndex > 1) {
				bodyRows.sort((a, b) => {
					let aData = +a.cells[target.cellIndex].textContent;
					let bData = +b.cells[target.cellIndex].textContent;
					return ascending ? aData - bData : bData - aData;
				});
			} else {
				bodyRows.sort((a, b) => {
					let aData = a.cells[target.cellIndex].textContent;
					let bData = b.cells[target.cellIndex].textContent;
					return ascending ? aData.localeCompare(bData) : bData.localeCompare(aData);
				});
			}
			setAscending(!ascending);
			myRef.current.tBodies[0].append(...bodyRows);
		}
	}

	
	return (
		<table ref={myRef} onClick={handleSorting} >
			<thead>
				<tr>{theads}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}
