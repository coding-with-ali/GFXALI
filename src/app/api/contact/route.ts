// app/api/contact/route.ts
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await client.create({
      _type: "contact",
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Data saved to Sanity" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Sanity Error" }, { status: 500 });
  }
}