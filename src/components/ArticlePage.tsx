import React from 'react';
import Navigation from "./Navigation";
import { ArrowLeft, User, Clock, Tag } from "lucide-react";
import { Button } from "./ui/button";
const articles = require("../data/articles.json");


interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  content: React.ReactNode;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}


interface ArticlePageProps {
  pageContext: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    content: string;
    date: string;
    category: string;
  };
}

const ArticlePage = ({ pageContext }) => {
  const { slug } = pageContext;
  const article = articles.find(a => a.slug === slug);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
        <button
          className="mb-4 text-sm text-blue-600 hover:underline"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6 text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span>{article.category}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
            <div
              className="prose max-w-none text-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
