'use client'

import toast from "react-hot-toast"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BannerColumn } from "./columns"
import { Button } from "@/components/ui/button"
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react"

interface CellActionProps {
    data: BannerColumn
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("Api berhasil di copy");
      };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => onCopy(data.id)}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy ID
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Update ID
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete ID
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

// export const cellAction()