window.onload = () => {
    /* GET CANVAS CONTEXT */
    const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');
	
    /* PREPARING CANVAS AREA FOR FURTHER WORK */
	const width = canvas.width;
	const height = canvas.height;
	
	context.fillRect(0, 0, width, height);
	
	/* DEFINE STATE'S COLOR ARRAY */
	const states = ['#113', '#014', '#b16', '#54f', '#74f', '#fff', '#add', '#4fc', '#185', '#8c4', '#ef6', '#4bd', '#27f', '33f', '#059', '#567'];
	
	/* TRANSFORM HEX STRING INTO BYTE ARRAYS */
	const byteStates = colorTransform(states);
	
	/* DEFINE AND FILL 2d ARRAY OF CELL STATES BY RANDOM VALUES */
	let field = randomDraw(byteStates.length);

    /* TRANSFORMING CANVAS CELL'S STATES THROUGH THE TIME */
	setInterval(function () {
		let newField = [];
		
		for (let y = 0; y < height; y++) {
			let newRow = [];
			for (let x = 0; x < width; x++) {

                /* GET SUM OF NEIGHBOUR'S STATES */
				const stateSum =
                field[(y + height - 1) % height][x] +
                field[y][(x + width - 1) % width] +
                field[(y + height - 1) % height][(x + width - 1) % width] +
                field[(y + 1) % height][(x + 1) % width] +
                field[(y + height - 1) % height][(x + 1) % width] +
                field[(y + 1) % height][(x + width - 1) % width] +
                field[(y + 1) % height][x] +
                field[y][(x + 1) % width];

                /* CHANGE CELL'S STATE DEPENDING ON THE STATE'S SUM AND AUTOMATON RULES */
                if (field[y][x] === 0) {
					if (stateSum < 5) {
						newRow[x] = 0
					} else if (stateSum < 100) {
						newRow[x] = 2
					} else {
						newRow[x] = 3
					}
                } else if (field[y][x] === byteStates.length - 1) {
                    newRow[x] = 0;
                } else {
                    newRow[x] = Math.min(Math.floor(stateSum / 8) + 5, byteStates.length - 1);
                }
			}
			newField[y] = newRow;
		}
		field = newField;
		draw();
		
	}, 100);

    // CONVERTING HEX INTO BYTE ARRAY
	function colorTransform(colorArr) {
        const result = [];
        for (let i = 0; i < colorArr.length; i++) {
            result[i] = [
                parseInt(colorArr[i].charAt(1) + colorArr[i].charAt(1), 16),
                parseInt(colorArr[i].charAt(2) + colorArr[i].charAt(2), 16),
                parseInt(colorArr[i].charAt(3) + colorArr[i].charAt(3), 16)
            ];
        }
        return result;
    }
	
	/* RANDOM RENDERING CANVAS GRID */
    function randomDraw(stateCount) {
        const result = [];
        for (let y = 0; y < height; y++) {
            let row = [];
            for (let x = 0; x < width; x++) {
                row[x] = Math.floor(Math.random() * stateCount);
            }
            result[y] = row;
        }
        return result
    }
	
	/* RENDERING CANVAS GRID */
	function draw() {
		const imageData = context.getImageData(0, 0, width, height);
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const offset = (width * y + x) * 4;
				imageData.data[offset] = byteStates[field[y][x]][0];
				imageData.data[offset + 1] = byteStates[field[y][x]][1];
				imageData.data[offset + 2] = byteStates[field[y][x]][2];
			}
		}
		context.putImageData(imageData, 0, 0);	
	}
}