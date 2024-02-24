fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
        json.forEach((test) => {
            const score = document.getElementById(test.category);
            score.textContent = test.score;
        });

        const sum = json.reduce((acc, test) => acc + test.score, 0);
        const average = sum / json.length;

        const averageScore = document.getElementById("Average");
        averageScore.textContent = Math.round(average);
    });
