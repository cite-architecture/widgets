# Text & Commentary Widget

## What it Does

Provides “classified show/hide” by clicking for comments attached to a text.

## Requirements

Javascript and CSS:

~~~html
	<link rel="stylesheet" href="cite_text_commentary.css">
	<script type="text/javascript" src="jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="cite_text_commentary.js"></script>
~~~

## Assumptions

- The text comments on it are wrapped in `<div class="ohco2_commentedPassage">…</div>`.
- Comments can be divided into groups, as children of a `<div class="ohco2_commentBlock" data-commentBlockLabel="SOME_LABEL">` element.
- There can be any number of `#ohco2_commentBlock` elements.

## Minimal Example

~~~html
<html>

	<head>
		<title>Text & Commentary</title>
		<link rel="stylesheet" href="cite_text_commentary.css">
		<script type="text/javascript" src="jquery-3.4.1.min.js"></script>
		<script type="text/javascript" src="cite_text_commentary.js"></script>
	</head>

	<body>
		<div class="ohco2_commentedPassage">
			<p>Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος</p>
			
			<div class="ohco2_commentBlock" data-commentBlockLabel="smart-comment">
				<p>This is the first line of the Iliad.</p>
			</div>

			<div class="ohco2_commentBlock" data-commentBlockLabel="dumb-comment">
				<p>It was written by Homer Simpson.</p>
			</div>	

		</div>
	</body>
</html>
~~~
		
## Fuller Examples

The files `simple-test.html` and `test.html` are working examples. The former very simple, and the latter with output from [the `citewriter` library](https://github.com/cite-architecture/citewriter).

The file `test.html` includes a reference to `../shared/shared_cite.css`, which is *not* necessary for this widget, but which provides a somewhat more attractive layout.
