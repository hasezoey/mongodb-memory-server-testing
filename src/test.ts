// NodeJS: 14.9.0
import { MongoMemoryReplSet } from "mongodb-memory-server-core"; // version: 6.7.0
import * as mongodb from "mongodb"; // version: 3.6.1
import * as debug from "debug";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

(async () => {
  debug.enable("*");

  const replSet = new MongoMemoryReplSet({ autoStart: false });
})();
