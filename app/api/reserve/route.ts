import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    console.log("[POST /api/reserve] Payload:", JSON.stringify(payload, null, 2))
    return NextResponse.json({ success: true, message: "Reservation received" })
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 })
  }
}
