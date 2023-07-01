import * as vscode from 'vscode';

const prefix = 'profileStatus';

function getPrefix(): string {
  return prefix;
}

function getAlignment(): string {
  let alignment = '';

  if (vscode.workspace) {
    const config = vscode.workspace.getConfiguration(prefix);
    alignment = config.get('itemAlignment') as string;
  }

  return alignment;
}

export {
  getAlignment,
  getPrefix,
};
