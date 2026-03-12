const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');

// Regex to match "dark:" followed by any non-whitespace, non-quote characters
// It accounts for potential trailing spaces to avoid double spaces in classNames
const DARK_CLASS_REGEX = /\bdark:[^\s"'\`]+(\s+)?/g;

function walk(dir) {
	let results = [];
	const list = fs.readdirSync(dir);
	list.forEach(function (file) {
		file = path.join(dir, file);
		const stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			// Recurse into a subdirectory
			results = results.concat(walk(file));
		} else {
			// Is a file
			if (file.endsWith('.jsx') || file.endsWith('.js')) {
				results.push(file);
			}
		}
	});
	return results;
}

function removeDarkClasses() {
	console.log(`Scanning directory: ${SRC_DIR}`);
	const files = walk(SRC_DIR);
	let modifiedFilesCount = 0;

	files.forEach((file) => {
		const originalContent = fs.readFileSync(file, 'utf8');
		if (DARK_CLASS_REGEX.test(originalContent)) {
			// Replace and trim any extra spaces that might have been left behind inside className strings
			let newContent = originalContent.replace(DARK_CLASS_REGEX, '');
			
			// Clean up any double spaces that might occur
			newContent = newContent.replace(/  +/g, ' ');

			// Write back the clean content
			fs.writeFileSync(file, newContent, 'utf8');
			console.log(`Cleaned 'dark:' classes from: ${path.relative(__dirname, file)}`);
			modifiedFilesCount++;
		}
	});

	console.log(`\nDone! Removed dark classes from ${modifiedFilesCount} files.`);
}

removeDarkClasses();
