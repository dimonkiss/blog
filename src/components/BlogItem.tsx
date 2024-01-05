// src/components/BlogItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../interfaces/articles';
import DeleteButton from './DeleteButton';

interface BlogItemProps {
    article: Article;
    onDelete: (id: number) => void;
}

const BlogItem: React.FC<BlogItemProps> = ({ article, onDelete }) => {
    return (
        <li>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
            <p>Category: {article.category}</p>
            <p>Created at: {article.createdAt}</p>
            <DeleteButton onClick={() => onDelete(article.id)} />
            <Link to={`/article/${article.id}`}>View Details</Link>
        </li>
    );
};

export default BlogItem;