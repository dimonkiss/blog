// src/components/EditArticle.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  Article  from '../interfaces/articles';

interface EditArticleProps {
    articles: Article[];
    onArticleUpdated: (updatedArticle: Article) => void;
}

const EditArticle: React.FC<EditArticleProps> = ({ articles, onArticleUpdated }) => {
    const { articleId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Article | undefined>(undefined);

    useEffect(() => {
        const articleToEdit = articles.find((article) => article.id.toString() === articleId);
        setFormData(articleToEdit);
    }, [articles, articleId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (formData) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData) {
            // Call the onArticleUpdated callback to update the state in the parent component
            onArticleUpdated(formData);

            // Redirect to the home page or navigate to the article detail page
            navigate('/');
        }
    };

    if (!formData) {
        return <div>Loading...</div>; // Add a loading indicator or handle the case where the article is not found
    }

    return (
        <div>
            <h2>Edit Article</h2>
            <form onSubmit={handleUpdate}>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />

                <label>Content:</label>
                <textarea name="content" value={formData.content} onChange={handleChange} required />

                <label>Author:</label>
                <input type="text" name="author" value={formData.author} onChange={handleChange} required />

                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} required />

                <button type="submit">Update Article</button>
            </form>
        </div>
    );
};

export default EditArticle;
