import { writable } from "svelte/store";
import { supabase } from "./supabase";

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function createBlogStore() {
    const { subscribe, set, update } = writable([]);
    let lastFetch = 0;

    return {
        subscribe,
        fetchPosts: async () => {
            const now = Date.now();
            if (now - lastFetch < CACHE_DURATION) {
                console.log("Using cached data");
                return;
            }

            const { data, error } = await supabase
                .from("blog_posts")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching blog posts:", error);
                return;
            }

            set(data);
            lastFetch = now;
        },
        addPost: async (post) => {
            const { data, error } = await supabase
                .from("blog_posts")
                .insert(post)
                .single();

            if (error) {
                console.error("Error adding blog post:", error);
                return;
            }

            update((posts) => [data, ...posts]);
        },
    };
}

export const blogStore = createBlogStore();
