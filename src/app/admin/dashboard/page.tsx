"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type BlogPost = {
  id?: string;
  title: string;
  content: string;
  slug: string;
  date: string;
};

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndLoadPosts = async () => {
      try {
        // Check authentication
        const authResponse = await fetch('/api/auth/check', { credentials: 'same-origin' });
        if (!authResponse.ok) {
          router.push('/admin');
          return;
        }
        
        // Load existing posts from API
        const postsResponse = await fetch('/api/blog');
        if (postsResponse.ok) {
          const savedPosts = await postsResponse.json();
          setPosts(savedPosts);
        } else {
          console.error('Failed to load posts');
        }
      } catch (error) {
        console.error('Error:', error);
        router.push('/admin');
      }
    };

    checkAuthAndLoadPosts();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
      });
      router.push('/admin');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
    setSlug(post.slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setTitle('');
    setContent('');
    setSlug('');
  };

  const handleDelete = async (postSlug: string) => {
    if (!window.confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch('/api/blog', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug: postSlug }),
        credentials: 'same-origin',
      });

      if (response.ok) {
        // Refresh the posts list
        const postsResponse = await fetch('/api/blog');
        if (postsResponse.ok) {
          const updatedPosts = await postsResponse.json();
          setPosts(updatedPosts);
        }
        setSuccess('Blog post deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to delete blog post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      setError('An error occurred while deleting the post');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content || !slug) {
      setError('All fields are required');
      return;
    }

    try {
      const method = editingPost ? 'PUT' : 'POST';
      const body = editingPost
        ? JSON.stringify({
            originalSlug: editingPost.slug,
            title,
            content,
            slug: slug.toLowerCase().replace(/\s+/g, '-'),
          })
        : JSON.stringify({
            title,
            content,
            slug: slug.toLowerCase().replace(/\s+/g, '-'),
          });

      const response = await fetch('/api/blog', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
        credentials: 'same-origin',
      });

      if (response.ok) {
        // Refresh the posts list
        const postsResponse = await fetch('/api/blog');
        if (postsResponse.ok) {
          const updatedPosts = await postsResponse.json();
          setPosts(updatedPosts);
        }
        
        setTitle('');
        setContent('');
        setSlug('');
        setEditingPost(null);
        setError('');
        setSuccess(
          editingPost 
            ? 'Blog post updated successfully!' 
            : 'Blog post created successfully!'
        );
        
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to save blog post');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      setError('An error occurred while saving the post');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
          {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
        </h2>
          
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
          {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{success}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                URL Slug
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  /blog/
                </span>
                <input
                  type="text"
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="flex-1 min-w-0 block w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="blog-post-url"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content (Markdown)
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
              {editingPost && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Existing Blog Posts</h2>
          {posts.length === 0 ? (
            <p className="text-gray-500">No blog posts yet.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li key={post.slug} className="py-4 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">{post.title}</h3>
                      <p className="text-sm text-gray-500">
                        /{post.slug} • {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
