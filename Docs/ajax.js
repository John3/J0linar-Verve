// JavaScript Document
function loadXMLDoc( fname )
{
	var xmlDoc;
	
	// code for IE
	if ( window.ActiveXObject )
	{
		xmlDoc = new ActiveXObject( "Microsoft.XMLDOM" );
	}
	// code for Mozilla, Firefox, Opera, etc.
	else if ( document.implementation && document.implementation.createDocument )
	{
		xmlDoc = document.implementation.createDocument( "", "", null );
	}
	else
	{
		alert( 'Your browser cannot handle this script' );
		return 0;
	}
	
	xmlDoc.async = false;
	xmlDoc.load( fname );
	
	return xmlDoc;
}

function parseData( classDoc, classXsl, elementId )
{
	xml = loadXMLDoc( classDoc );
	xsl = loadXMLDoc( classXsl );

	// code for IE
	if ( window.ActiveXObject )
	{
		resultDocument = xml.transformNode( xsl );
		document.getElementById( elementId ).innerHTML = resultDocument;
	}
	// code for Mozilla, Firefox, Opera, etc.
	else if ( document.implementation && document.implementation.createDocument )
	{
		xsltProcessor = new XSLTProcessor();
		xsltProcessor.importStylesheet( xsl );
                //xsltProcessor.setParameter( null, "product-name", "verve" );
		resultDocument = xsltProcessor.transformToFragment( xml, document );
		document.getElementById( elementId ).appendChild( resultDocument );
	}
}