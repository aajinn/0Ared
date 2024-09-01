import { supabase } from "$lib/supabase.js";

export const load = async ({ params }) => {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", params.slug)
        .single();
    if (error) {
        console.error("Error loading post:", error);
        return {
            status: 500,
            error: new Error("Failed to load post"),
        };
    }
    console.log(data);
    return {
        data,
    };
};
