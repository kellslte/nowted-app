import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"
import { useStore } from "./store"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export const authFetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${useStore.getState().token}`,
  },
})

export const fetchAuthUser = async (token: string) => {
  const { data } = await fetcher('/auth/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const authResponse = await data.data

  return {
    ...authResponse,
    token: token,
  };
}

export function debounce(func, wait) {
  let timeout;
  
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
