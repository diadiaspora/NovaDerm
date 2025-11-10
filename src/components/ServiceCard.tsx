import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  category,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-[#2C5F4F] text-white px-3 py-1 text-xs font-medium rounded-[5px]">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3
          style={{ fontFamily: "NorthCarossela, serif" }}
          className=" text-xl text-[#2C5F4F] mb-2 group-hover:text-[#D4AF37] transition-colors"
        >
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button className="text-[#D4AF37] font-medium text-sm flex items-center group-hover:gap-2 transition-all">
          Learn More
          <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </button>
      </div>
    </div>
  );
};
