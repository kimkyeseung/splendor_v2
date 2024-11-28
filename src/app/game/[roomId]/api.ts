import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "http://localhost:3001/game";

export async function GET(
  req: NextRequest,
  { params }: { params: { roomId: string } }
) {
  const response = await fetch(`${API_BASE_URL}/${params.roomId}`);
  const data = await response.json();
  return NextResponse.json(data);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { roomId: string } }
) {
  const body = await req.json();
  const response = await fetch(`${API_BASE_URL}/${params.roomId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return NextResponse.json(data);
}
