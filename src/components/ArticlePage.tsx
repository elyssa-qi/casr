import React from 'react';

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

const ArticlePage: React.FC<ArticlePageProps> = ({ pageContext }) => {
  const { title, excerpt, image, content, date, category } = pageContext;
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <span className="text-sm text-[#4e73b2] font-semibold">{category}</span>
        <h1 className="text-3xl font-bold mt-2 mb-4">{title}</h1>
        <div className="flex items-center text-gray-500 mb-6">
          <span>{date}</span>
        </div>
        {image && <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-6" />}
        <p className="text-gray-600 mb-6">{excerpt}</p>
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default ArticlePage;