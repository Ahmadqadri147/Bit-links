import clientPromise from "@/lib/mongodb.js";

export async function GET(request, { params }) {
  try {
    const { handle } = await params;
    const client = await clientPromise;
    const db = client.db("bit-tree");
    const collection = db.collection("Links");

    const result = await collection.findOne({ handle: handle });

    if (!result) {
      return Response.json({ success: false, error: true, message: 'Bit-Tree not found' }, { status: 404 });
    }

    return Response.json({ success: true, error: false, result: result });
  } catch (error) {
    return Response.json({ success: false, error: true, message: error.message }, { status: 500 });
  }
}
