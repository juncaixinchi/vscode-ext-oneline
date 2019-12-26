'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.oneline', function () {
		// Get the active text editor
		let editor = vscode.window.activeTextEditor;

		if (editor) {
			let document = editor.document;
			let selection = editor.selection;

			// Get the word within the selection
			let word = document.getText(selection);
			let oneline = word.replace(/\s+/g, ' ');
			editor.edit(editBuilder => {
				editBuilder.replace(selection, oneline);
			});
		}
	});

	context.subscriptions.push(disposable);
}