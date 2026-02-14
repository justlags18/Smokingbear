import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    console.log("[POST /api/contact] Payload:", JSON.stringify(payload, null, 2))
    return NextResponse.json({ success: true, message: "Message received" })
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 })
  }
}
