// src/components/BlogList.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogItem from './BlogItem';
import ArticleDetail from '../components/ArtilcleDetail';
import Article from '../interfaces/articles';

interface BlogListProps {
    articles: Article[];
}

const BlogList: React.FC<BlogListProps> = ({ articles }) => {
    const [blogArticles, setBlogArticles] = useState(articles);

    const handleDelete = (id: number) => {
        const updatedArticles = blogArticles.filter(article => article.id !== id);
        setBlogArticles(updatedArticles);
    };

    return (
        <Router>
            <div>
                <h2>Blog List</h2>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ul>
                                {blogArticles.map((article) => (
                                    <BlogItem key={article.id} article={article} onDelete={handleDelete} />
                                ))}
                            </ul>
                        }
                    />
                    <Route
                        path="/article/:articleId"
                        element={<ArticleDetail articles={blogArticles} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default BlogList;
