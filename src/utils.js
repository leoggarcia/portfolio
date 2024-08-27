export function generatePastelColor(inputString) {
	// Generate a hash from the input string
	let hash = 0;
	for (let i = 0; i < inputString.length; i++) {
		hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
	}

	// Use the hash to generate RGB values
	const r = (hash & 0xff0000) >> 16;
	const g = (hash & 0x00ff00) >> 8;
	const b = hash & 0x0000ff;

	// Adjust the RGB values to create pastel colors
	const pastelR = Math.floor((r + 255) / 2);
	const pastelG = Math.floor((g + 255) / 2);
	const pastelB = Math.floor((b + 255) / 2);

	// Convert RGB to hex
	const toHex = (c) => {
		const hex = c.toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	const colorToReturn = `#${toHex(pastelR)}${toHex(pastelG)}${toHex(pastelB)}`;
	console.log(
		'🚀 ~ generatePastelColor ~ inputString:',
		inputString,
		'bg-[' + colorToReturn + ']',
	);

	return colorToReturn;
}
