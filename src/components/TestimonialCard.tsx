import React from 'react';

interface TestimonialCardProps {
  name: string;
  treatment: string;
  text: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  treatment,
  text,
  rating,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 fill-[#D4AF37]"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{text}"</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-[#2C5F4F]">{name}</p>
        <p className="text-sm text-gray-500">{treatment}</p>
      </div>
    </div>
  );
};
