import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { removeDirSync } from "../source";

beforeEach(async () => {
  mock({
    "/access": {
      b: {
        c: {},
        d: "file d"
      }
    },
    "/no-access": directory({
      mode: 0,
      items: {
        b: {}
      }
    })
  })
});

afterEach(async () => {
  restore();
});

test("remove recursive", async () => {
  expect(removeDirSync("/access/b/c")).toBe(true);
});

test("remove no recursive", async () => {
  expect(removeDirSync("/access/b/c", { recursive: false })).toBe(true);
});

test("remove recursive parent", async () => {
  expect(removeDirSync("/access/b")).toBe(true);
});

test("remove no recursive parent", async () => {
  expect(removeDirSync("/access/b", { recursive: false })).toBe(false);
});

test("remove no exists", async () => {
  expect(removeDirSync("/access/e", { recursive: false })).toBe(true);
});

test("remove no access", async () => {
  expect(removeDirSync("/no-access")).toBe(undefined);
});
