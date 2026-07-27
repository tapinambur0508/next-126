import { NextResponse, NextRequest } from "next/server";

import { api, type ApiError } from "../../api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = await api.post("/auth/login", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      {
        status: (error as ApiError).status,
      },
    );
  }
}
