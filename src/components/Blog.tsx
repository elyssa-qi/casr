import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

const Blog = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Blog Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              CASR Blog
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, tips, and stories from the
              world of Canadian youth sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-sm text-blue-600 font-semibold mb-2">
                  FEATURED POST
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Building Mental Resilience in Young Canadian Athletes
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover how mental toughness training is helping young
                  Canadian athletes overcome performance anxiety and build the
                  resilience needed to compete at the highest levels.
                </p>
                <div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-blue-600 font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    Read More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-600"
                disabled
              >
                Previous
              </Button>
              <Button className="bg-blue-600 text-white">1</Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-600"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-600"
              >
                3
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-600"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest news, tips, and stories delivered directly to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    category: "TRAINING",
    title: "5 Essential Training Tips for Young Hockey Players",
    excerpt:
      "Discover the key training techniques that can help young hockey players improve their skills and performance on the ice.",
    date: "May 15, 2023",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551927336-09d50efd69cd?w=800&q=80",
    category: "NUTRITION",
    title: "Nutrition Guide for Young Athletes: Fueling for Success",
    excerpt:
      "Learn about the optimal nutrition strategies to help young athletes perform at their best and recover effectively.",
    date: "April 28, 2023",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "MENTAL HEALTH",
    title: "Building Mental Resilience in Young Athletes",
    excerpt:
      "Explore strategies to help young athletes develop mental toughness and cope with the pressures of competitive sports.",
    date: "April 10, 2023",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554d77?w=800&q=80",
    category: "SUCCESS STORIES",
    title: "From Local Rinks to National Team: Sarah's Journey",
    excerpt:
      "The inspiring story of how a young hockey player from Vancouver made it to Canada's Junior National Women's team.",
    date: "March 22, 2023",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    category: "EQUIPMENT",
    title: "Choosing the Right Equipment for Young Track Athletes",
    excerpt:
      "A comprehensive guide to selecting appropriate gear that enhances performance while ensuring safety for young runners.",
    date: "March 15, 2023",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800&q=80",
    category: "COACHING",
    title: "Effective Coaching Strategies for Youth Soccer Development",
    excerpt:
      "Learn how coaches can create positive environments that foster skill development and love for the game in young players.",
    date: "February 28, 2023",
  },
];

export default Blog;
