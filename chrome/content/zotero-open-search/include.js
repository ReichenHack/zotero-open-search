// Only create main object once
if (!Zotero.OpenSearch) {
	let loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
					.getService(Components.interfaces.mozIJSSubScriptLoader);
	loader.loadSubScript("chrome://zotero-open-search/content/zotero-open-search.js");
}
