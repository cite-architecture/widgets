# Aligned Elements

## What it Does

A generic wrappper to put 2 or more HTML elements in horizontal alignment.

## Requirements

Javascript and CSS:

~~~html
<link rel="stylesheet" href="cite_aligned_elements.css">
<script type="text/javascript" src="cite_aligned_elements.js"></script>
~~~

## Assumptions

That elements to be aligned will be wrapped like this:

~~~html
~~~


## Minimal Example

~~~html
<html>

	<head>
		<meta charset="utf-8"/>
		<title>Aligned Elements</title>
		<script type="text/javascript" src="cite_aligned_elements.js"></script>
	</head>

	<body>

		<div class="cite_aligned_elements">
			<div class="cite_aligned_element">
				<p>Μῆνιν ἄειδε θεὰ Πηληϊάδεω	Ἀχιλῆος</p>
			</div>
		
			<div class="cite_aligned_element">
				<p>This is the first line of the Iliad.</p>
			</div>
		</div>

	</body>
</html>
~~~

## Fuller Examples

The file `simple-test.html` is a  working example, showing 2- and 3-way alignments. 

**N.b.** That file contains a little internal CSS to show how to adjust the width of specific aligned elements.

