define(function (require, exports, module) {
	"use strict";
	var EditorManager, DocumentManager, InlineWidget;
	EditorManager = brackets.getModule("editor/EditorManager");
	DocumentManager = brackets.getModule("document/DocumentManager");
	InlineWidget = brackets.getModule("editor/InlineWidget").InlineWidget;

	var templates = {
		bracketsFontAwesome: require("text!template/bracketsFontAwesome.html")
	};
	var datas = {
		symbols: require("data/symbols")
	};

	function BracketsFontAwesome() {

		InlineWidget.call(this);
	}

	BracketsFontAwesome.prototype = Object.create(InlineWidget.prototype);
	BracketsFontAwesome.prototype.constructor = BracketsFontAwesome;
	BracketsFontAwesome.prototype.parentClass = InlineWidget.prototype;

	BracketsFontAwesome.prototype.load = function (hostEditor) {
		BracketsFontAwesome.prototype.parentClass.load.apply(this, arguments);
		this.$wrapperDiv = $(updateHtml(computeData()));
		this.$htmlContent.append(this.$wrapperDiv);
	};
	BracketsFontAwesome.prototype.onAdded = function () {
		BracketsFontAwesome.prototype.parentClass.onAdded.apply(this, arguments);
		window.setTimeout(this.sizeEditorToContent.bind(this));
	};
	BracketsFontAwesome.prototype.sizeEditorToContent = function () {
		this.hostEditor.setInlineWidgetHeight(this, 320, true);
	};


	function updateHtml(data, filter) {
		return Mustache.render(templates.bracketsFontAwesome, data);
	}

	function computeData() {
		return datas;
	}

	module.exports = BracketsFontAwesome;

});