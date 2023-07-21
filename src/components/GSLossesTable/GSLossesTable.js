import React, { useRef, useEffect, useState } from "react";
import './style.GSLossesTable.css';
export default function GSLossesTable(props) {
	const [ascending, setAscending] = useState(false);

	useEffect(() => {
		const tableBoundaryValues = {
			minPosValue: null,
			maxPosValue: null,
			minNegValue: null,
			maxNegValue: null,
			maxPosPoint: null,
			maxNegPoint: null,
		};
		let tableStyle = {};
		//event for sorting the table
		myRef.current.addEventListener("mouseover", (e) => {
			let target = e.target;
			if ((target.tagName === "TH" || target.tagName === "TD") && target.closest("tr").rowIndex !== 0) {
				const targetCellIndex = target.cellIndex;
				Array.from(myRef.current.tBodies[0].rows).forEach((row) => {
					Array.from(row.cells).forEach((cell) => {
						if (cell.cellIndex === targetCellIndex) {
							cell.style.backgroundColor = "#CFCEFB";
						}
					});
				});
				Array.from(target.closest("tr").cells).forEach((cell) => {
					cell.style.backgroundColor = "#CFCEFB";
				
				});
				target.style.backgroundColor = "#9993FA";
			}
		});

		myRef.current.addEventListener("mouseout", (e) => {
			let target = e.target;
			if ((target.tagName === "TH" || target.tagName === "TD") && target.closest("tr").rowIndex !== 0) {
				const targetCellIndex = target.cellIndex;
				Array.from(myRef.current.tBodies[0].rows).forEach((row) => {
					Array.from(row.cells).forEach((cell) => {
						if (cell.cellIndex === targetCellIndex) {
							// cell.style.backgroundColor = "";
							cell.style.backgroundColor = cell.getAttribute('customBackgroundColor');
						}
					});
				});
				Array.from(target.closest("tr").cells).forEach((cell) => {
					// cell.style.backgroundColor = "";
					cell.style.backgroundColor = cell.getAttribute('customBackgroundColor');
				});
				// target.style.backgroundColor = "";
				target.style.backgroundColor = target.getAttribute('customBackgroundColor');
			}
		});

		Array.from(myRef.current.rows).forEach((row) => {
			Array.from(row.cells).forEach((cell) => {
				let cellContent = Number.parseFloat(cell.textContent);
				// if (cellContent && cellContent < 0) {
				// 	cell.style.color = "red";
				// }
				//initialize tableBoundaryValues object and calculate minmax values
				if (cellContent && cell.cellIndex < row.cells.length - 1) {
					if (cellContent >= 0) {
						if (!tableBoundaryValues.minPosValue) {
							tableBoundaryValues.minPosValue = cellContent;
						} else {
							if (cellContent < tableBoundaryValues.minPosValue) {
								tableBoundaryValues.minPosValue = cellContent;
							}
						}

						if (!tableBoundaryValues.maxPosValue) {
							tableBoundaryValues.maxPosValue = cellContent;
						} else {
							if (cellContent > tableBoundaryValues.maxPosValue) {
								tableBoundaryValues.maxPosValue = cellContent;
							}
						}
					} else {
						if (!tableBoundaryValues.minNegValue) {
							tableBoundaryValues.minNegValue = cellContent;
						} else {
							if (cellContent > tableBoundaryValues.minNegValue) {
								tableBoundaryValues.minNegValue = cellContent;
							}
						}

						if (!tableBoundaryValues.maxNegValue) {
							tableBoundaryValues.maxNegValue = cellContent;
						} else {
							if (cellContent < tableBoundaryValues.maxNegValue) {
								tableBoundaryValues.maxNegValue = cellContent;
							}
						}
					}
				}
				if ((tableStyle.maxCellWidth || 0) < cell.offsetWidth) {
					tableStyle.maxCellWidth = cell.offsetWidth;
				}
			});
		});
		//set max negative and positive points
		tableBoundaryValues.maxPosPoint = tableBoundaryValues.maxPosValue - tableBoundaryValues.minPosValue;
		tableBoundaryValues.maxNegPoint = tableBoundaryValues.maxNegValue - tableBoundaryValues.minNegValue;
		console.log(tableBoundaryValues);

		Array.from(myRef.current.rows).forEach((row) => {
			Array.from(row.cells).forEach((cell) => {
				let cellContent = Number.parseFloat(cell.textContent);
				if (cellContent && cell.cellIndex < row.cells.length - 1) {
					if (cellContent >= 0) {
						let xValue = (cellContent - tableBoundaryValues.minPosValue) / tableBoundaryValues.maxPosPoint;
						let backgroundColor = `hsla(120,100%,${100 - Math.round(xValue * 50)}%, 1)`;
						cell.style.backgroundColor = backgroundColor;
						cell.setAttribute('customBackgroundColor',backgroundColor);
					} else {
						let xValue = (cellContent - tableBoundaryValues.minNegValue) / tableBoundaryValues.maxNegPoint;
						let backgroundColor = `hsla(0,100%,${100 - Math.round(xValue * 50)}%,1)`;
						cell.style.backgroundColor = backgroundColor;
						cell.setAttribute('customBackgroundColor',backgroundColor);
					}
				}
			});

			// set styles based on minmax numbers
			Array.from(row.cells).forEach((cell) => {
				let cellContent = Number.parseFloat(cell.textContent);
				if (!Number.isFinite(cellContent)) {
					// cell.style.fontWeight = "bold";
				}
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
		<table ref={myRef} onClick={handleSorting}>
			<thead>
				<tr>{theads}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}
