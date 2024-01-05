// src/components/DeleteButton.tsx
import React from 'react';

interface DeleteButtonProps {
    onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Delete</button>
    );
};

export default DeleteButton;
