import db from "@/lib/db";
import { BannerForm } from "./components/banner-form";

const BannerPage = async (
    props: {
        params: Promise<{bannerId: string }>;
    }
) => {
    const params = await props.params;
    const banner = await db.banner.findUnique({
        where: {
            id: params.bannerId
        },
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BannerForm initialData={banner} />
            </div>
        </div>
    );
};

export default BannerPage;
