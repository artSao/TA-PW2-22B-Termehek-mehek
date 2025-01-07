"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CategoryCollumn = {
  id: string
  name: string
  bannerLabel: string
  createdAt: string
}

export const columns: ColumnDef<CategoryCollumn>[] = [
  
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "banner",
    header: "banner",
    cell: ({row}) => row.original.bannerLabel
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "action",
    cell: ({row}) => <CellAction data={row.original} />
  }
]
