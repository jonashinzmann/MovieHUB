import dbConnect from "../../../db/connect";
import List from "../../../db/models/List";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const lists = await List.find();
    return response.status(200).json(lists);
  }

  if (request.method === "POST") {
    const listData = request.body;
    await List.create(listData);
    return response.status(201).json({ status: "List created" });
  }

  response.status(400).json({ error: "Invalid request method" });
}
