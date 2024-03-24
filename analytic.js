// Initialize chart with default data
let chartData = {
    labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
    datasets: [{
        label: 'Analysis',
        data: [7.47, 7.39, 7.29, 7.20, 7.11, 7.00, 6.98, 6.90, 6.81, 6.72, 6.63],
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

let ctx = document.getElementById('barchart').getContext('2d');
let barchart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Update chart based on selected options
function plotGraph() {
    // Get selected options for X-axis and Y-axis
    let xAxisSelect = document.getElementById("xAxisSelect");
    let selectedXAxis = xAxisSelect.options[xAxisSelect.selectedIndex].text;
  
    let yAxisSelect = document.getElementById("yAxisSelect");
    let selectedYAxis = yAxisSelect.options[yAxisSelect.selectedIndex].text;
  
    // Update chart data
    chartData.labels.push(selectedXAxis);
    chartData.datasets[0].data.push(parseFloat(selectedYAxis));
  
    // Update chart
    barchart.update();
}