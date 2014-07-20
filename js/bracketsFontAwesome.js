define(function (require, exports, module) {
	"use strict";
	var EditorManager, DocumentManager, InlineWidget;
	EditorManager = brackets.getModule("editor/EditorManager");
	DocumentManager = brackets.getModule("document/DocumentManager");
	InlineWidget = brackets.getModule("editor/InlineWidget").InlineWidget;

	function BracketsFontAwesome() {

		InlineWidget.call(this);
	}

	BracketsFontAwesome.prototype = Object.create(InlineWidget.prototype);
	BracketsFontAwesome.prototype.constructor = BracketsFontAwesome;
	BracketsFontAwesome.prototype.parentClass = InlineWidget.prototype;

	BracketsFontAwesome.prototype.load = function (hostEditor) {
		BracketsFontAwesome.prototype.parentClass.load.apply(this, arguments);
		this.$wrapperDiv = $("<div>toto</div>");
		this.$htmlContent.append(this.$wrapperDiv);
	};
	BracketsFontAwesome.prototype.onAdded = function () {
		BracketsFontAwesome.prototype.parentClass.onAdded.apply(this, arguments);
		window.setTimeout(this.sizeEditorToContent.bind(this));
	};
	BracketsFontAwesome.prototype.sizeEditorToContent = function () {
		this.hostEditor.setInlineWidgetHeight(this, this.$wrapperDiv.height() + 20, true);
	};

	module.exports = BracketsFontAwesome;

});