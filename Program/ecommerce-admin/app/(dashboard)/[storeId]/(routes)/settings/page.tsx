import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { SettingsForm } from "./components/settings-form";

interface settingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingsPage: React.FC<settingsPageProps> = async props => {
  const params = await props.params;
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store}/>
      </div>
    </div>
  );
};

export default SettingsPage;
