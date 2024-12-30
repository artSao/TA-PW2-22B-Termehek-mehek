import db from "@/lib/db";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboarPage = async ({ params }: DashboardPageProps) => {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default DashboarPage;
