import React from "react";

const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/80?img=1",
    },
    {
      name: "Emily Johnson",
      role: "CTO",
      image: "https://i.pravatar.cc/84?img=2",
    },
    {
      name: "Michael Brown",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/88?img=3",
    },
    {
      name: "Sarah Wilson",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/90?img=4",
    },
    {
      name: "David Lee",
      role: "DevOps Engineer",
      image: "https://i.pravatar.cc/94?img=5",
    },
    {
      name: "Sophia Martinez",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/98?img=6",
    },
    {
      name: "James Anderson",
      role: "QA Engineer",
      image: "https://i.pravatar.cc/100?img=7",
    },
    {
      name: "Olivia Taylor",
      role: "System Analyst",
      image: "https://i.pravatar.cc/104?img=8",
    },
    {
      name: "Daniel White",
      role: "Product Manager",
      image: "https://i.pravatar.cc/108?img=9",
    },
  ];

function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our <span className="text-red-500">Zentix Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate team of professionals dedicated to delivering innovative software solutions.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg flex items-center transition-transform transform hover:-translate-y-2"
            >
              <img
                alt={member.name}
                className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4"
                src={member.image}
              />
              <div className="flex-grow">
                <h3 className="text-gray-900 font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;