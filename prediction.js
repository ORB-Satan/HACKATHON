document.addEventListener("DOMContentLoaded", function() {
    var progressBarsContainer = document.getElementById('progressBars');
    var startBtn = document.getElementById('startBtn');

    // Function to start the progress
    function startProgress() {
        var progressBarsData = [
            { name: 'Progress 1', value: 20 },
            { name: 'Progress 2', value: 40 },
            { name: 'Progress 3', value: 60 },
            { name: 'Progress 4', value: 80 },
            { name: 'Progress 5', value: 40 },
            { name: 'Progress 6', value: 70 }
        ];

        progressBarsData.forEach(function(item) {
            var progressBarWrapper = document.createElement('div');
            progressBarWrapper.classList.add('mb-3');

            var progressBarLabel = document.createElement('div');
            progressBarLabel.textContent = item.name;
            progressBarWrapper.appendChild(progressBarLabel);

            var progressBar = document.createElement('div');
            progressBar.classList.add('progress');
            progressBar.innerHTML = `
                <div class="progress-bar" role="progressbar" style="width: ${item.value}%" aria-valuenow="${item.value}" aria-valuemin="0" aria-valuemax="100">${item.value}%</div>
            `;
            progressBarWrapper.appendChild(progressBar);

            progressBarsContainer.appendChild(progressBarWrapper);
        });
    }

    // Event listener for the start button
    startBtn.addEventListener('click', function() {
        startProgress();
    });
});