import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { tmpdir } from "os";
import { join } from "path";
import { removeDir } from "../source";

beforeEach(async () => {
  mock({
    [tmpdir()]: {
      tmpdir: {}
    },
    [process.cwd()]: {
      "access": {
        b: {
          c: {},
          d: "file d"
        }
      },
      "no-access": directory({
        mode: 0,
        items: {
          b: {}
        }
      })
    },
    "/unsafe": {
      directory: {}
    }
  }, {
    createCwd: false,
    createTmp: false
  });
});

afterEach(async () => {
  restore();
});

test("remove recursive", async () => {
  return removeDir("./access/b/c").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no recursive", async () => {
  return removeDir("./access/b/c", { recursive: false }).then((success) => {
    expect(success).toBe(true);
  });
});

test("remove recursive parent", async () => {
  return removeDir("./access/b").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no recursive parent", async () => {
  return removeDir("./access/b", { recursive: false }).then((success) => {
    expect(success).toBe(false);
  });
});

test("remove no exists", async () => {
  return removeDir("./access/e", { recursive: false }).then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no access", async () => {
  return removeDir("./no-access").then((success) => {
    expect(success).toBe(undefined);
  });
});

test("remove from tmpdir", async () => {
  return removeDir(join(tmpdir(), "tmpdir")).then((success) => {
    expect(success).toBe(true);
  });
});

test("remove from unsafe", async () => {
  return removeDir("/unsafe/directory").then((success) => {
    expect(success).toBe(undefined);
  });
});

test("remove from unsafe", async () => {
  return removeDir("/unsafe/directory", { unsafe: true }).then((success) => {
    expect(success).toBe(true);
  });
});
