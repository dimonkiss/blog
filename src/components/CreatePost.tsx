// src/components/CreateArticle.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Article from '../interfaces/articles'; // Change the import statement

interface CreateArticleProps {
    onArticleCreated: (newArticle: Article) => void;
}

const CreateArticle: React.FC<CreateArticleProps> = ({ onArticleCreated }) => {
    const [formData, setFormData] = useState<Omit<Article, 'createdAt'>>({
        id: Date.now(),
        title: '',
        content: '',
        author: '',
        category: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Set createdAt to the current date (as a string)
        const newArticle: Article = {
            ...formData,
            createdAt: new Date().toString(),
        };

        // Call the onArticleCreated callback to update the state in the parent component
        onArticleCreated(newArticle);

        // Redirect to the home page or navigate to the article detail page
        navigate('/');
    };

    return (
        <div>
            <h2>Create a New Article</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />

                <label>Content:</label>
                <textarea name="content" value={formData.content} onChange={handleChange} required />

                <label>Author:</label>
                <input type="text" name="author" value={formData.author} onChange={handleChange} required />

                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} required />

                <button type="submit">Create Article</button>
            </form>
        </div>
    );
};

export default CreateArticle;
