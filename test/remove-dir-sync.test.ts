import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { tmpdir } from "os";
import { join } from "path";
import { removeDirSync } from "../source";

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

test("remove recursive", () => {
  expect(removeDirSync("./access/b/c")).toBe(true);
});

test("remove no recursive", () => {
  expect(removeDirSync("./access/b/c", { recursive: false })).toBe(true);
});

test("remove recursive parent", () => {
  expect(removeDirSync("./access/b")).toBe(true);
});

test("remove no recursive parent", () => {
  expect(removeDirSync("./access/b", { recursive: false })).toBe(false);
});

test("remove no exists", () => {
  expect(removeDirSync("./access/e", { recursive: false })).toBe(true);
});

test("remove no access", () => {
  expect(removeDirSync("./no-access")).toBe(undefined);
});

test("remove from tmpdir", () => {
  expect(removeDirSync(join(tmpdir(), "tmpdir"))).toBe(true);
});

test("remove from unsafe", async () => {
  expect(removeDirSync("/unsafe/directory")).toBe(undefined);
});

test("remove from unsafe", async () => {
  expect(removeDirSync("/unsafe/directory", { unsafe: true })).toBe(true);
});
