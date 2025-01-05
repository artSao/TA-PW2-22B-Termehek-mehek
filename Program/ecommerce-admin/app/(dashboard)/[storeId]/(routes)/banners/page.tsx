import db from "@/lib/db";
import { BannerClient } from "./components/client";

const Bannerspage = async ({
  params
}: {
  params: {storeId: string}
  }) => {
  
  const banners = await db.banner.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createAt:"desc"
    }
  })
  
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BannerClient data={banners} />
      </div>
    </div>
  );
};

export default Bannerspage;
