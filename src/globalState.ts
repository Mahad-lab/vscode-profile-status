import { readFile } from 'fs/promises';

interface UserDataProfile {
  location: string;
  name: string;
}

interface ProfileAssociations {
  workspaces: Record<string, string>;
}

interface GlobalStateObject {
  userDataProfiles?: UserDataProfile[];
  profileAssociations?: ProfileAssociations;
}

/**
 * Profiles are identified by an internal ID e.g 6c702312. We retrieve the name of the profile through this ID.
 */
function getName(obj: GlobalStateObject, id: string): string {
  let profileName = 'Default';

  if (obj.userDataProfiles) {
    const profileFound = obj.userDataProfiles.find((item) => {
      return item.location === id;
    });

    if (profileFound) {
      profileName = profileFound.name;
    }
  }

  return profileName;
}

/*
 * Is it an empty object?
 */
function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

/*
 * Closure for Global State
 */
function globalState(uri: { fsPath: string }) {
  let obj: GlobalStateObject = {};

  async function parseFile() {
    try {
      let data = await readFile(uri.fsPath);
      obj = JSON.parse(data.toString());
    } catch (err) {
      console.error(
        `Cannot read ${uri.fsPath} to instantiate GlobalState. Err: ${err}`
      );
    }
  }

  /**
   * Get the name of the profile associated with a workspace.
   */
  async function getProfileName(workspaceUri: string): Promise<string> {
    let name: string = 'Null';

    if (isEmpty(obj)) {
      await parseFile();
    }

    if (obj.profileAssociations && obj.profileAssociations.workspaces) {
      // association is in the form of: { workspace_uri : profile_id }
      const workspaceAssociations = obj.profileAssociations.workspaces;

      let profileID: string | undefined;

      Object.keys(workspaceAssociations).every((key) => {
        let workspaceUriString = workspaceUri.toString();

        if (workspaceUriString === key) {
          profileID = workspaceAssociations[key];
          return false;
        }

        return true;
      });

      if (profileID) {
        name = getName(obj, profileID);
      }
    }

    return name;
  }

  return {
    getProfileName,
  };
}

export default globalState;
