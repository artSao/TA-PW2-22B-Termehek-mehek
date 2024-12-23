import { auth } from "@clerk/nextjs/server"; // pastikan auth diimpor dengan benar
import db from "@/lib/db"; // pastikan db diimpor dengan benar
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Gunakan await untuk mendapatkan hasil dari auth()
    const authResult = await auth(); // auth() mengembalikan Promise
    const userId = authResult.userId; // Ambil userId dari hasil auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new NextResponse("Nama toko perlu diinput", { status: 400 });
    }

    const store = await db.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
