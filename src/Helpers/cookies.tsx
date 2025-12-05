"use server";

import { cookies } from "next/headers";

export async function setCookie(name: string, value: any) {
  try {
    const cookieStore = await cookies();
    await cookieStore.set(name, value);
  } catch (error) {
    return { error: error };
  }
}
export async function getCookie(name: string, defaultValue?: any) {
  try {
    const cookieStore = await cookies();
    const cookie = await cookieStore.get(name);
    return cookie?.value || defaultValue;
  } catch (error) {
    return { error: error };
  }
}
