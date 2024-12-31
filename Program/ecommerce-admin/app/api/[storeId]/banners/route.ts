import { auth } from "@clerk/nextjs/server"; // pastikan auth diimpor dengan benar
import db from "@/lib/db"; // pastikan db diimpor dengan benar
import { NextResponse } from "next/server";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    // Gunakan await untuk mendapatkan hasil dari auth()
    const authResult = await auth(); // auth() mengembalikan Promise
    const userId = authResult.userId; // Ambil userId dari hasil auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { label, imageUrl } = body;

    if (!label) {
      return new NextResponse("Nama banner perlu diinput", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Image banner perlu diinput", { status: 400 });
      }
      
      if (!params.storeId) {
          return new NextResponse("Store id URL dibutuhkan")
      }

    const banner = await db.banner.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
