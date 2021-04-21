const weightsKey = 'weights';
const thresholdKey = 'thresholdKey';
export default {
	loadWeights() {
		const w = localStorage.getItem(weightsKey);
		if (w)
			return JSON.parse(w);
		return null;
	},

	saveWeights(weights) {
		localStorage.setItem(weightsKey, JSON.stringify(weights));
	},

	parseTrainingData(trainingData) {
		const realTrainingData = [];

		const lines = trainingData.split("\n");
		for (const line of lines) {
			const splittedLine = line.split("=");
			const solution = Number.parseFloat(splittedLine[1]);
			const splittedData = splittedLine[0].split(" ");
			const data = [];
			for (const dataString of splittedData) {
				const number = Number.parseFloat(dataString)
				if (Number.isNaN(number)) continue
				data.push(number);
			}
			data.push(1);
			realTrainingData.push({
				solution,
				data
			});
		}

		return realTrainingData;
	},

	train(trainingData, w, maxIteration, minError, threshold, trainingCoef) {
		const parsedTrainingData = this.parseTrainingData(trainingData);
		localStorage.clear();
		let currentIteration = 0;
		let currentWeights = [...w];
		let error = 1;
		let iterationWithoutChanges = 0;

		if(!maxIteration)
			maxIteration = Number.POSITIVE_INFINITY;

		if(!minError)
			minError = Number.NEGATIVE_INFINITY;
		while (iterationWithoutChanges < parsedTrainingData.length && currentIteration < maxIteration && error >= minError) {
			const currentData = parsedTrainingData[currentIteration % parsedTrainingData.length];
			const y = this.evaluate(currentData.data, currentWeights, threshold);
			currentIteration++;
			error = currentData.solution - y;

			if (error !== 0) {
				for (let i = 0; i < currentWeights.length; i++)
					currentWeights[i] += trainingCoef * error * currentData.data[i];
				iterationWithoutChanges = 0;
			} else
				iterationWithoutChanges++;
		}

		this.saveWeights(currentWeights);
		this.saveThreshold(threshold);
		return currentWeights;
	},
	saveThreshold(threshold) {
		localStorage.setItem(thresholdKey,threshold );
	},
	loadThreshold() {
		const w = localStorage.getItem(thresholdKey);
		if (w)
			return Number.parseFloat(w);
		return null;
	},
	evaluate(data, w, threshold) {
		if (!threshold) threshold = 0;

		let sum = 0;
		for (let i = 0; i < data.length; i++)
			sum += data[i] * w[i];

		return sum >= threshold ? 1 : 0;
	}
}