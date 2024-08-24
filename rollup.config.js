import html from '@rollup/plugin-html';

function template() {
	return `
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
		<title>Cube 13</title>
	</head>
	<body style="margin:0;overflow:hidden;background-color:black;">
		<canvas id="c" style="width:100%;height:100%;background-color:black;"></canvas>
		<canvas id="ui" style="position:absolute;left:0;top:0;width:100%;height:100%;"></canvas>
		<div id='i' style="position:absolute;left:0;top:0;color:white"></div>
		<script src="s.js"></script>
	</body>
</html>
`.replace(/[\n\t]/g, '');
}

export default {
	input: 'dist/esm/index.js',
	output: {
		file: 'dist/build/s.js',
		format: 'iife',
	},
	plugins: [
		html({ template }),
	],
};
