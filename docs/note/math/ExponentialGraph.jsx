import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function ExponentialGraph() {
	const sliderRef = useRef(null);
	const valueRef = useRef(null);
	const chartRef = useRef(null);
	const [maxTerms, setMaxTerms] = useState(10); // 最大項数を制御する

	useEffect(() => {
		const ctx = chartRef.current?.getContext("2d");

		const options = {
			scales: {
				x: {
					title: {
						display: true,
						text: "Number of Terms",
					},
				},
				y: {
					title: {
						display: true,
						text: "Estimated Value of e",
					},
					suggestedMin: 0,
					suggestedMax: 3,
				},
			},
			animation: false,
			maintainAspectRatio: false,
		};

		let chartInstance;

		// eの推定値を生成する関数
		function computeE(maxTerms) {
			let eValues = [];
			let x = 1.0;
			let e = 0.0;

			for (let i = 1; i <= maxTerms; i++) {
				e += x;
				x = x / i;
				eValues.push(e);
			}

			return eValues;
		}

		// グラフを描画する関数
		function drawExponentialGraph(maxTerms) {
			const eValues = computeE(maxTerms);
			const xValues = Array.from({ length: maxTerms }, (_, i) => i + 1);

			const data = {
				labels: xValues,
				datasets: [
					{
						label: "Estimated Value of e",
						data: eValues,
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

		// グラフの更新関数
		function updateGraph() {
			const newMaxTerms = parseInt(sliderRef.current?.value || maxTerms);
			valueRef.current.textContent = newMaxTerms;
			setMaxTerms(newMaxTerms);
			drawExponentialGraph(newMaxTerms);
		}

		// 初期グラフ描画
		drawExponentialGraph(maxTerms);

		if (sliderRef.current) {
			sliderRef.current.addEventListener("input", updateGraph);
		}

		return () => {
			if (sliderRef.current) {
				sliderRef.current.removeEventListener("input", updateGraph);
			}
			if (chartInstance) {
				chartInstance.destroy();
			}
		};
	}, [maxTerms]);

	return (
		<div style={{ textAlign: "center" }}>
			<div style={{ marginBottom: "20px" }}>
				<label htmlFor="slider" style={{ marginRight: "10px" }}>
					Number of Terms:
				</label>
				<input
					type="range"
					id="slider"
					min="1"
					max="30"
					defaultValue={maxTerms}
					step="1"
					ref={sliderRef}
					style={{ width: "200px", marginRight: "10px" }}
				/>
				<span ref={valueRef}>{maxTerms}</span>
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
