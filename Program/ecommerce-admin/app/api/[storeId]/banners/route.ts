import { auth } from "@clerk/nextjs/server"; // pastikan auth diimpor dengan benar
import db from "@/lib/db"; // pastikan db diimpor dengan benar
import { NextResponse } from "next/server";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export async function POST(req: Request, props: { params: Promise<{ storeId: string }> }) {
  const params = await props.params;
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
      return new NextResponse("Store id URL dibutuhkan");
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
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
    console.log("[BANNERS_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(req: Request, props: { params: Promise<{ storeId: string }> }) {
  const params = await props.params;
  try {
    if (!params.storeId) {
      return new NextResponse("Store id URL dibutuhkan");
    }

    const banner = await db.banner.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log("[BANNERS_GET]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
