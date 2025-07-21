import React from 'react';

interface CardListProps {
        title: string;
        items: string[];
        className?: string;
}

const CardList: React.FC<CardListProps> = React.memo(({ title, items, className = "" }) => {
        return (
                <div className={`bg-transparent border-2 border-dotted border-gray-400 rounded-xl p-3 sm:p-4 ${className}`}>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                                {title}
                        </h3>
                        <ul className="space-y-1 sm:space-y-2">
                                {items.map((item, index) => (
                                        <li
                                                key={`${title}-${index}`}
                                                className="text-gray-700 text-sm sm:text-base hover:text-gray-900 transition-colors duration-200 cursor-pointer px-2 py-2 rounded-lg hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
                                        >
                                                • {item}
                                        </li>
                                ))}
                        </ul>
                </div>
        );
});

CardList.displayName = 'CardList';

export default CardList; 