import * as vscode from 'vscode';
import Environment from './environment';
import globalState from './globalState';
import * as statusBarItem from './statusBarItem';
import * as configuration from './configuration';

let item: vscode.StatusBarItem;
let profileName: string;

async function activate(context: vscode.ExtensionContext) {
  let workspaceFolders = vscode.workspace.workspaceFolders;

  // a workspace is open
  if (workspaceFolders) {
    let mainWorkspaceUri = workspaceFolders[0].uri.toString();

    try {
      let env = new Environment(context);
      let globalStateUri = env.getGlobalStateUri();

      let state = globalState(globalStateUri);
      profileName = await state.getProfileName(mainWorkspaceUri);

      showStatusBarItem();
      vscode.window.showInformationMessage('profile changed');

      let disposable = vscode.workspace.onDidChangeConfiguration(
        changeConfigurationHandler
      );

      context.subscriptions.push(disposable);
    } catch (err) {
      console.error(err);
    }
  }
}

function showStatusBarItem() {
  let alignment = configuration.getAlignment() as 'Left' | 'Right';
  item = statusBarItem.build(`Profile: ${profileName}`, alignment);
  item.show();
}

function reload() {
  item.dispose();
  showStatusBarItem();
}

function changeConfigurationHandler(e: vscode.ConfigurationChangeEvent) {
  // update only if extension setting was changed
  if (e.affectsConfiguration(configuration.getPrefix())) {
    reload();
  }
}

export {
  activate,
};
