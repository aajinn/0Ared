import React from 'react';

interface SectionCardProps {
  title: string;
  items: string[];
  icon: string;
}

const SectionCard: React.FC<SectionCardProps> = React.memo(({ title, icon, items }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl" role="img" aria-label="icon">{icon}</span>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 capitalize">
            {title}
          </h3>
        </div>
        <ul className="space-y-2 sm:space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-default flex items-start gap-2"
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

SectionCard.displayName = 'SectionCard';

export default SectionCard; 