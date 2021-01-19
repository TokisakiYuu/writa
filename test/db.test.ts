import mongoose, { Schema } from "mongoose";
import { MONGODB_URI } from "../src/util/secrets";

const collectionName = "_jest_temp";
const tempSchema = new Schema({
  name: String,
  say: String,
});
const TempModel = mongoose.model(collectionName, tempSchema);


describe("mongoose test", () => {

  test("connect to mongodb", async () => {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    expect(mongoose.connection.readyState).toEqual(mongoose.STATES.connected);
  }, 20000);

  test(`insert document to ${collectionName} collection`, async () => {
    const obj = {
      name: "Tom",
      say: "Hello world!"
    };
    await (new TempModel(obj)).save();
  });

  test(`query document from ${collectionName} collection`, async () => {
    const doc = await TempModel.findOne({ name: "Tom" });
    expect(doc).toBeInstanceOf(mongoose.Model);
  }, 10000);

  test(`delete all document with ${collectionName} collection`, async () => {
    await TempModel.deleteMany({});
    const count = await TempModel.countDocuments();
    expect(count).toEqual(0);
  });

  test(`drop collection ${collectionName}`, async () => {
    await TempModel.collection.drop();
  });
});