import { supabase } from "./supabase";

export const getUsers = async () => {
  let { data, error } = await supabase.from("user").select("*");

  if (error) throw error;
  return data;
};

export const addUser = async (user) => {
  const { data, error } = await supabase.from("user").insert([user]);

  if (error) throw error;
  return data;
};
