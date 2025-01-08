import db from "@/lib/db";
import { BannerClient } from "./components/client";
import { BannerColumn } from "./components/columns";

import { format } from 'date-fns'

const ProductsPage = async (
  props: {
    params: Promise<{ storeId: string}>
  }
) => {
  const params = await props.params;
  const products = await db.product.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedProducts:BannerColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: item.price,
    createdAt: format(item.createdAt, "MMM do, yyyy")
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BannerClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;