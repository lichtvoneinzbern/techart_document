import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Sandbox() {
  const aSliderRef = useRef(null);
  const bSliderRef = useRef(null);
  const aValueRef = useRef(null);
  const bValueRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const aSlider = aSliderRef.current;
    const bSlider = bSliderRef.current;
    const aValue = aValueRef.current;
    const bValue = bValueRef.current;

    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: 'x',
          }
        },
        y: {
          title: {
            display: true,
            text: 'y',
          },
          min: -100,
          max: 100
        }
      },
      animation: false
    };

    let chartInstance;

    function drawQuadraticGraph(a, b) {
      const xValues = [];
      const yValues = [];
      for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x.toFixed(1));
        yValues.push((a * Math.pow(x, b)).toFixed(2));
      }

      const data = {
        labels: xValues,
        datasets: [{
          label: `y = ${a}x^${b}`,
          data: yValues,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          tension: 0.1,
        }]
      };

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
      });
    }

    function updateGraph() {
      const a = parseFloat(aSlider.value);
      const b = parseInt(bSlider.value);
      aValue.textContent = a;
      bValue.textContent = b;
      drawQuadraticGraph(a, b);
    }

    aSlider.addEventListener('input', updateGraph);
    bSlider.addEventListener('input', updateGraph);

    drawQuadraticGraph(parseFloat(aSlider.value), parseInt(bSlider.value));

    // Cleanup
    return () => {
      aSlider.removeEventListener('input', updateGraph);
      bSlider.removeEventListener('input', updateGraph);
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1>方程式の図解 - y = ax<sup>b</sup></h1>
      <p>スライドバーを使って、係数 <strong>a</strong> と指数 <strong>b</strong> を変更し、グラフを確認します。</p>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="aSlider" style={{ marginRight: '10px' }}>a:</label>
        <input
          type="range"
          id="aSlider"
          min="-5"
          max="5"
          defaultValue="1"
          step="0.1"
          ref={aSliderRef}
          style={{ width: '200px', marginRight: '10px' }}
        />
        <span ref={aValueRef}>1</span>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="bSlider" style={{ marginRight: '10px' }}>b:</label>
        <input
          type="range"
          id="bSlider"
          min="1"
          max="5"
          defaultValue="2"
          step="1"
          ref={bSliderRef}
          style={{ width: '200px', marginRight: '10px' }}
        />
        <span ref={bValueRef}>2</span>
      </div>

      <div style={{ width: '80%', margin: '40px auto' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
