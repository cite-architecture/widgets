# Preview Image Widget

## What it Does

Provides any `<img>` element of class `citeImage` with "preview on hover" functionality.

## Requirements

Javascript and CSS:

~~~html
	<link rel="stylesheet" href="cite_preview_image.css">
	<script type="text/javascript" src="../shared/jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="jquery.zoom.min.js"></script>
	<script type="text/javascript" src="cite_preview_image.js"></script>
~~~

Magnifying-glass icon file:

~~~
images/icon.png
~~~

## Assumptions

- Image-elements have style `citeImage`.

If an image is wrapped in an `<a>` element, with a link to an external viewer, that link will still work.

## Minimal Example

~~~html
<html>

<head>
	<meta charset="utf-8"/>
	<title>Preview Image</title>
	<link rel="stylesheet" href="cite_preview_image.css">
	<script type="text/javascript" src="../shared/jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="jquery.zoom.min.js"></script>
</head>

<body>

	
	<a href="http://www.homermultitext.org/ict2/?urn=urn:cite2:hmt:vaimg.2017a:VA012RN_0013"><img class="citeImage" src="http://www.homermultitext.org/iipsrv?IIIF=/project/homer/pyramidal/VenA/VA012RN_0013.tif/full/!6000,3000/0/default.jpg" /></a>



</body>

	<script type="text/javascript" src="cite_preview_image.js"></script>
</html>
~~~
		
## Fuller Examples

The file `simple-test.html` contains a working example.

