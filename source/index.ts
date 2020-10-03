import { promises, rmdirSync } from "fs";

export type Options = {
  /**
   * If true, perform a recursive directory removal. Default: `true`
   */
  recursive?: boolean;
}

function handleError(e: any) {
  if(e.code === "ENOENT") {
    return true;
  } else if(e.code === "ENOTEMPTY") {
    return false;
  } else {
    return undefined;
  }
}

export async function removeDir(path: string, options: Options = {}) {
  return promises.rmdir(path, { recursive: options.recursive ?? true }).then(() => {
    return true;
  }).catch((e) => {
    return handleError(e);
  });
}

export function removeDirSync(path: string, options: Options = {}) {
  try {
    rmdirSync(path, { recursive: options.recursive ?? true });
    return true;
  } catch(e) {
    return handleError(e);
  }
}
