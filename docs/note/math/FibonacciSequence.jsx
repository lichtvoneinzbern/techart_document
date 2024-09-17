import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function FibonacciSequence() {
	const sliderRef = useRef(null);
	const valueRef = useRef(null);
	const chartRef = useRef(null);
	const [sequenceLength, setSequenceLength] = useState(10);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const options = {
			scales: {
				x: {
					title: {
						display: true,
						text: "n (Index)",
					},
				},
				y: {
					title: {
						display: true,
						text: "Fibonacci Number",
					},
				},
			},
			animation: false,
			maintainAspectRatio: false,
		};

		let chartInstance;

		function generateFibonacci(length) {
			const fib = [0, 1];
			for (let i = 2; i < length; i++) {
				fib.push(fib[i - 1] + fib[i - 2]);
			}
			return fib;
		}

		function drawFibonacciGraph(length) {
			const fibonacci = generateFibonacci(length);
			const xValues = Array.from({ length }, (_, i) => i);

			const data = {
				labels: xValues,
				datasets: [
					{
						label: "Fibonacci Sequence",
						data: fibonacci,
						borderColor: "rgba(75, 192, 192, 1)",
						backgroundColor: "rgba(75, 192, 192, 0.2)",
						fill: false,
						tension: 0.1,
					},
				],
			};

			if (chartInstance) {
				chartInstance.destroy();
			}

			chartInstance = new Chart(ctx, {
				type: "line",
				data: data,
				options: options,
			});
		}

		function updateGraph() {
			const length = parseInt(sliderRef.current.value);
			valueRef.current.textContent = length;
			drawFibonacciGraph(length);
		}

		drawFibonacciGraph(sequenceLength);

		sliderRef.current.addEventListener("input", updateGraph);

		return () => {
			sliderRef.current.removeEventListener("input", updateGraph);
			if (chartInstance) {
				chartInstance.destroy();
			}
		};
	}, [sequenceLength]);

	return (
		<div style={{ textAlign: "center" }}>
			<div style={{ marginBottom: "20px" }}>
				<label htmlFor="slider" style={{ marginRight: "10px" }}>
					Fibonacci Length:
				</label>
				<input
					type="range"
					id="slider"
					min="5"
					max="30"
					defaultValue={sequenceLength}
					step="1"
					ref={sliderRef}
					style={{ width: "200px", marginRight: "10px" }}
					onChange={(e) => setSequenceLength(e.target.value)}
				/>
				<span ref={valueRef}>{sequenceLength}</span>
			</div>

			<div
				style={{
					width: "100%",
					maxWidth: "1200px",
					margin: "40px auto",
					height: "500px",
				}}
			>
				<canvas ref={chartRef}></canvas>
			</div>
		</div>
	);
}
