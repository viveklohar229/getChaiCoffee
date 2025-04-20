// app/api/test-db/route.js (for Next.js 13+ with App Router)
import connectDb from "../../../db/connectDb"; // ya jahan bhi connectDb file hai

export async function GET() {
  try {
    await connectDb();
    return Response.json({ message: "MongoDB Connected Successfully" });
  } catch (error) {
    return Response.json({ error: "MongoDB Connection Failed" }, { status: 500 });
  }
}
