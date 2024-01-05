// src/components/ArticleDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../interfaces/articles';

const ArticleDetail: React.FC<{ articles: Article[] }> = ({ articles }) => {
    const { articleId } = useParams<{ articleId: string }>();
    const article = articles.find((a) => a.id === Number(articleId));

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
            <p>Category: {article.category}</p>
            <p>Created at: {article.createdAt}</p>
        </div>
    );
};

export default ArticleDetail;
