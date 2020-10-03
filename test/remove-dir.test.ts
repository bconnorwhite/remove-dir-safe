import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { removeDir } from "../source";

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
  return removeDir("/access/b/c").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no recursive", async () => {
  return removeDir("/access/b/c", { recursive: false }).then((success) => {
    expect(success).toBe(true);
  });
});

test("remove recursive parent", async () => {
  return removeDir("/access/b").then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no recursive parent", async () => {
  return removeDir("/access/b", { recursive: false }).then((success) => {
    expect(success).toBe(false);
  });
});

test("remove no exists", async () => {
  return removeDir("/access/e", { recursive: false }).then((success) => {
    expect(success).toBe(true);
  });
});

test("remove no access", async () => {
  return removeDir("/no-access").then((success) => {
    expect(success).toBe(undefined);
  });
});
