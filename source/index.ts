import { promises, rmdirSync } from "fs";
import { tmpdir } from "os";
import isPathInside from "is-path-inside";

export type Options = {
  /**
   * If true, perform a recursive directory removal. Default: `true`
   */
  recursive?: boolean;
  /**
   * Allow removals outside of current working directory, or OS temp directory. Default: `false`
   */
  unsafe?: boolean;
};

function handleError(e: any) {
  if(e.code === "ENOENT") {
    return true;
  } else if(e.code === "ENOTEMPTY") {
    return false;
  } else {
    return undefined;
  }
}

function validatePath(path: string, options: Options) {
  if(options.unsafe) {
    return true;
  } else {
    return isPathInside(path, process.cwd()) || isPathInside(path, tmpdir());
  }
}

export async function removeDir(path: string, options: Options = {}): Promise<boolean | undefined> {
  if(validatePath(path, options)) {
    return promises.rmdir(path, { recursive: options.recursive ?? true }).then(() => {
      return true;
    }).catch((e) => {
      return handleError(e);
    });
  } else {
    return undefined;
  }
}

export function removeDirSync(path: string, options: Options = {}): boolean | undefined {
  if(validatePath(path, options)) {
    try {
      rmdirSync(path, { recursive: options.recursive ?? true });
      return true;
    } catch(e) {
      return handleError(e);
    }
  } else {
    return undefined;
  }
}
