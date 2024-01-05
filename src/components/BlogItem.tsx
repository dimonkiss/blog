// src/components/BlogItem.tsx
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Article from '../interfaces/articles';
import DeleteButton from './DeleteButton';

interface BlogItemProps {
    article: Article;
    onDelete: (id: number) => void;
}

const BlogItem: React.FC<BlogItemProps> = ({ article, onDelete }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
            <p>Category: {article.category}</p>
            <p>Likes: {likes}</p>
            <p>Dislikes: {dislikes}</p>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
            <Link to={`/article/${article.id}`}>Read more</Link>
            <button onClick={() => onDelete(article.id)}>Delete</button>
        </div>
    );
};

export default BlogItem;