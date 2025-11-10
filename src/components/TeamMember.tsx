import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  credentials: string[];
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  credentials,
}) => {
  return (
    <div className="text-center group">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F4F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button className="bg-white text-[#2C5F4F] px-6 py-2 rounded-[5px] font-medium text-sm">
            View Profile
          </button>
        </div>
      </div>
      <h3
        style={{ fontFamily: "NorthCarossela, serif" }}
        className=" text-xl text-[#2C5F4F] mb-1"
      >
        {name}
      </h3>
      <p className="text-[#D4AF37] font-thin mb-3">{role}</p>
      <div className="space-y-1">
        {credentials.map((cred, idx) => (
          <p key={idx} className="text-sm text-gray-600">
            {cred}
          </p>
        ))}
      </div>
    </div>
  );
};
