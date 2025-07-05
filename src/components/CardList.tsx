import React from 'react';

interface CardListProps {
        title: string;
        items: string[];
        className?: string;
}

const CardList: React.FC<CardListProps> = ({ title, items, className = "" }) => {
        return (
                <div className={`bg-transparent border-2 border-dotted border-gray-400 rounded-xl p-4 ${className}`}>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {title}
                        </h3>
                        <ul className="space-y-1">
                                {items.map((item, index) => (
                                        <li
                                                key={index}
                                                className="text-gray-700 text-sm hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                                        >
                                                • {item}
                                        </li>
                                ))}
                        </ul>
                </div>
        );
};

export default CardList; 