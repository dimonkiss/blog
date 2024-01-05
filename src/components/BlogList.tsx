// src/components/BlogList.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import ArticleDetail from './ArtilcleDetail';
import CreateArticle from './CreatePost';
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

    const handleArticleCreated = (newArticle: Article) => {
        setBlogArticles([...blogArticles, newArticle]);
    };

    return (
        <Router>
            <div>
                <h2>Blog List</h2>
                <Link to="/create-article">Add Article</Link>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <ul>
                                    {blogArticles.map((article) => (
                                        <BlogItem key={article.id} article={article} onDelete={handleDelete} />
                                    ))}
                                </ul>
                                <Link to="/create-article">Add Article</Link>
                            </div>
                        }
                    />
                    <Route
                        path="/article/:articleId"
                        element={<ArticleDetail articles={blogArticles} />}
                    />
                    <Route
                        path="/create-article"
                        element={<CreateArticle onArticleCreated={handleArticleCreated} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default BlogList;
