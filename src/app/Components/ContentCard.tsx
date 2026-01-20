import React from 'react';
import { IconType } from 'react-icons';

interface ContentCardProps {
  title: string;
  Icon: IconType;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, Icon }) => {
  return (
    // The card container: highly rounded corners, shadow, hover scaling
    <div className="flex flex-col h-56 w-full max-w-70 rounded-[40px] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer group">
      
      {/* Top Section: Brighter Orange + Icon */}
      <div className="bg-card-top grow-2 flex items-center justify-center pt-6 relative">
        {/* Using react-icons. Sizing them up large. */}
        <Icon className="text-toc-dark text-7xl group-hover:text-black transition-colors" />
      </div>
      
      {/* The white separator line */}
      <div className="h-1 bg-white w-full z-10"></div>
      
      {/* Bottom Section: Slightly darker orange + Title */}
      <div className="bg-card-bottom grow py-4 flex items-center justify-center px-4 text-center">
        <h3 className="text-toc-dark font-extrabold text-lg leading-tight">{title}</h3>
      </div>
    </div>
  );
};

export default ContentCard;