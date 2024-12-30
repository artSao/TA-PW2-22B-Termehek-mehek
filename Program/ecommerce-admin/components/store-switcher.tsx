"use client";

import { Store } from "@prisma/client";
import { PopoverTrigger } from "./ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";

type PopOverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopOverTriggerProps {
  items: Store[];
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitcherProps) => {
  const StoreModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
      label: item.name,
      value: item.id
  }));

    const currentStore = formattedItems.find((item) => item.value === params.storeId)
    
  return <div>Store Switcher New</div>;
};

export default StoreSwitcher;
