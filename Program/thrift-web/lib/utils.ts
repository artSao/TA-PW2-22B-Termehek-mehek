import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi untuk menggabungkan kelas dan menghindari duplikasi kelas Tailwind
export function cn(...inputs: ClassValue[]) {
  // Menggunakan clsx untuk menggabungkan kelas dan twMerge untuk menghindari duplikasi kelas
  return twMerge(clsx(inputs));
}
