'use server'

import { revalidatePath } from 'next/cache';
import { mockApiService } from "./mockApi";

export async function addUser(formData) {
  try {
    const { data } = await mockApiService.post("/auth/users/signup", formData);
    revalidatePath('/Admin/users');
    return { success: true, user: data };
  } catch (error) {
    console.error("Error adding user:", error);
    return { success: false, error: error.response?.data?.message || error.message };
  }
}