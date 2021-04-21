const weightsKey = 'weights';

function loadWeights() {
	const w = localStorage.getItem(weightsKey);
	if (w)
		return JSON.parse(w);
	return null;
}

function saveWeights(weights) {
	localStorage.setItem(weightsKey, JSON.stringify(weights));
}

function parseTrainingData(trainingData) {
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
}

function train(trainingData, w, maxIteration, minError, threshold, trainingCoef) {
	const parsedTrainingData = parseTrainingData(trainingData);

	let currentIteration = 0;
	let currentWeights = [...w];
	let error = 1;
	let iterationWithoutChanges = 0;

	while (iterationWithoutChanges < parsedTrainingData.length && (maxIteration === null || currentIteration < maxIteration) && (minError === null || error > minError)) {
		const currentData = parsedTrainingData[currentIteration % parsedTrainingData.length];
		const y = evaluate(currentData.data, currentWeights, threshold);
		currentIteration++;
		error = currentData.solution - y;

		if (error !== 0) {
			for (let i = 0; i < currentWeights.length; i++)
				currentWeights[i] += trainingCoef * error * currentData.data[i];
			iterationWithoutChanges = 0;
		} else
			iterationWithoutChanges++;
	}

	saveWeights(currentWeights);
	return currentWeights;
}

function evaluate(data, w, threshold) {
	if (!threshold) threshold = 0;

	let sum = 0;
	for (let i = 0; i < data.length; i++)
		sum += data[i] * w[i];

	return sum >= threshold ? 1 : 0;
}

let weights = loadWeights();
const alreadyTrained = Boolean(weights);
if (!alreadyTrained) {
	weights = [];
	for (let i = 0; i < 3; i++)
		weights.push(Math.random() * 2 - 1);
}

// const or = "1 1 = 1\n1 0 = 1\n 0 1 = 1\n 0 0 = 0";
const and = "1 1 = 1\n1 0 = 0\n 0 1 = 0\n 0 0 = 0";

weights = train(
	and,
	weights,
	null,
	null,
	null,
	0.1
);

console.log(evaluate([1, 1, 1], weights));
console.log(evaluate([1, 0, 1], weights));
console.log(evaluate([0, 1, 1], weights));
console.log(evaluate([0, 0, 1], weights));