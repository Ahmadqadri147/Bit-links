import clientPromise from "@/lib/mongodb.js";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.handle) {
      return Response.json({ success: false, error: true, message: 'Handle is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bit-tree");
    const collection = db.collection("Links");


    const existingUser = await collection.findOne({ handle: body.handle });
    if (existingUser) {
      return Response.json({ success: false, error: true, message: 'Handle already exists' }, { status: 400 });
    }


    const result = await collection.insertOne(body);

    return Response.json({ success: true, error: false, message: 'Link added successfully', result: result });
  } catch (error) {
    return Response.json({ success: false, error: true, message: error.message }, { status: 500 });
  }
}
