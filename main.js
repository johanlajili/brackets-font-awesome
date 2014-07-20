/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
	"use strict";
	var TRIGGER = "";
	//External Modules
	var EditorManager, ExtensionUtils;
	EditorManager = brackets.getModule("editor/EditorManager");
	ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

	//Local Modules;
	var BracketsFontAwesome = require("js/BracketsFontAwesome");

	function provider(hostEditor, pos) {
		if (!hostEditor.getSelectedText().match(TRIGGER)) {
			return null;
		}
		var def = new $.Deferred();
		var bracketsFontAwesome = new BracketsFontAwesome();
		bracketsFontAwesome.load(hostEditor);
		def.resolve(bracketsFontAwesome);
		return def.promise();
	}

	ExtensionUtils.loadStyleSheet(module, "css/bracketsFontAwesome.css");
	ExtensionUtils.loadStyleSheet(module, "assets/font-awesome-4.1.0/css/font-awesome.min.css");
	EditorManager.registerInlineEditProvider(provider);
});