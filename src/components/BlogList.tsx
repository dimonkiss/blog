// src/components/BlogList.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import ArticleDetail from './ArtilcleDetail';
import CreateArticle from './CreatePost';
import EditArticle from './EditArticle'; // Додайте імпорт нового компонента
import  Article  from '../interfaces/articles';

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

    const handleArticleUpdated = (updatedArticle: Article) => {
        const updatedArticles = blogArticles.map(article =>
            article.id === updatedArticle.id ? updatedArticle : article
        );
        setBlogArticles(updatedArticles);
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

                                        <div key={article.id}>
                                        <BlogItem article={article} onDelete={handleDelete} />
                                        <Link to={`/edit-article/${article.id}`}>Edit
                                </Link>
                            </div>
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
                    <Route
                        path="/edit-article/:articleId"
                        element={<EditArticle articles={blogArticles} onArticleUpdated={handleArticleUpdated} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default BlogList;
