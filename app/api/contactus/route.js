// app/api/contactus/route.js
import connectDb from '@/db/connectDb';
import Contactus from "@/models/contactus";

export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const contact = new Contactus(body);
    const saved = await contact.save();
    return Response.json({ success: true, data: saved });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, message: "Something went wrong" }, { status: 500 });
  }
}
