import * as vscode from 'vscode';
import * as path from 'path';

/**
 * App information about local system.
 */
class Environment {
    private globalStateUri: string;

    constructor(context: vscode.ExtensionContext) {
        this.globalStateUri = resolveGlobalStateUri(context);
    }

    /**
     * Get the URI of the storage.json file that represents the global workspace state.
     */
    getGlobalStateUri(): vscode.Uri {
        return vscode.Uri.file(this.globalStateUri);
    }
}


/**
 * Resolve the filepath for storage.json file.
 */
function resolveGlobalStateUri(context: vscode.ExtensionContext): string {
    let portableAppPath = process.env.VSCODE_PORTABLE;
    let filepath = "";

    if (portableAppPath === undefined) {
        filepath = path.join(
            context.globalStoragePath,
            "../../..",
            "User",
            "globalStorage",
            "storage.json"
        );
    } else {
        filepath = path.join(
            portableAppPath,
            "user-data",
            "User",
            "globalStorage",
            "storage.json"
        );
    }

    return filepath;
}


export default Environment;
