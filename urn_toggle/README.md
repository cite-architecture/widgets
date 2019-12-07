# URN Toggle

## What it Does

### Problem

- CTS- and CITE2-URNs are long; they are awkward when scattered throughout a dataset.
- At the same time, CTS- and CITE2-URNs are the only complete and unambiguous way to identify scholarly data in the CITE-Architecture.

### Solution

The URN-Toggle widget offers the best of all possible worlds, by allowing CTS- and CITE2-URNs to be displayed in four different states:

- "`urn`": The shortest state. Indicates that there is a URN attached to some data.
- "`…:tlg0012.tlg001.msA:1.1`" or "`…:msA.2019a:12r`": Group/Work/Version:Passage (for CTS-URNs) or Collections/Version:Selector (for CITE2-URNs). The human-parsable content necessary for identification by a human reader.
- "`1.1`" or "`12r`": The passage-component only (for CTS-URNs), or the object-selector only (for CITE2-URNs).
- The full URN.

This widget takes advantage of the [`xcite` library](https://github.com/cite-architecture/xcite), a Scala/ScalaJS library for creating and manipulating CTS- and CITE2-URNs.

## Requirements

Javascript and CSS:

~~~html
<link rel="stylesheet" href="cite_urn_toggle.css">
<script type="text/javascript" src="../shared/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../shared/xcite-opt.js"></script>
<script type="text/javascript" src="cite_urn_toggle.js"></script>
~~~

## Assumptions

That CTS-URNs will be wrapped like this:

~~~html
<span class="cite_urn ctsUrn" data-ctsurn="urn:cts:greekLit:tlg0012.tlg001.msA:1.1">urn:cts:greekLit:tlg0012.tlg001.msA:1.1</span>
~~~

That Cite2-URNs will be wrapped like this:

~~~html
<span class="cite_urn cite2Urn" data-cite2urn="urn:cite2:hmt:msA.v1:12r">urn:cite2:hmt:msA.v1:12r</span>
~~~

## Minimal Example

~~~html
<html>

	<head>
		<meta charset="utf-8"/>
		<title>URN Toggle</title>
		<link rel="stylesheet" href="cite_urn_toggle.css">
		<script type="text/javascript" src="../shared/jquery-3.4.1.min.js"></script>
		<script type="text/javascript" src="../shared/xcite-opt.js"></script>
	</head>

	<body>

		<p>Μῆνιν ἄειδε θεὰ Πηληϊάδεω	Ἀχιλῆος <span class="cite_urn ctsUrn" data-ctsurn="urn:cts:greekLit:tlg0012.tlg001.msA:1.1">urn:cts:greekLit:tlg0012.tlg001.msA:1.1</span></p>

	</body>
</html>
~~~

## Fuller Examples

The files `simple-test.html` and `test.html` are working examples. The former very simple, and the latter with output from [the `citewriter` library](https://github.com/cite-architecture/citewriter).

The file `test.html` includes a reference to `../shared/shared_cite.css`, which is *not* necessary for this widget, but which provides a somewhat more attractive layout.
