import React from "react";
import user from "../assets/image.png"

const teamMembers = [
    {
      name: "Denuwan Chamika",
      role: "Lead Developer",
      image: user,
    },
    {
      name: "Nuwan Perera",
      role: "UI/UX Designer",
      image: user,
    },
    {
      name: "Brayan",
      role: "DevOps Engineer",
      image: user,
    },
    {
      name: "Harshitha",
      role: "Software Engineer",
      image: user,
    },
   {
      name: "Nisansala",
      role: "QA Engineer",
      image: user,
    },
    {
      name: "Chamidu",
      role: "Intern Full Stack Developer",
      image: user,
    },
    {
      name: "Nevidu",
      role: "Intern Mobile Developer",
      image: user,
    },
    {
      name: "Kevin",
      role: "Junior Developer",
      image: user,
    },
  ];

function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 text-transparent bg-clip-text">
  Zentix Team
</span>
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