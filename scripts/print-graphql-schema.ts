import fs from "fs";
import path from "path";
import { printSchema } from "graphql";
import schema from "../src/data/types/Schema";

const code = printSchema(schema, { commentDescriptions: true });
const filePath = path.resolve(__dirname, "../assets/schema.graphql");

fs.writeFile(filePath, code, () => {
  console.log(`schema output to ${filePath}`);
});
