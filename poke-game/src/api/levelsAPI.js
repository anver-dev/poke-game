import { supabase } from "./supabase";

export const getLevels = async () => {
  let { data, error } = await supabase.from("level").select("*");

  if (error) throw error;
  return data;
};

