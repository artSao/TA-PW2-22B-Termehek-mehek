import db from "@/lib/db";

interface DashboardPageProps {
  params: Promise<{ storeId: string }>;
}

const DashboarPage = async (props: DashboardPageProps) => {
  const params = await props.params;
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default DashboarPage;
