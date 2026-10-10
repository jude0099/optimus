const teamMembers = [
  {
    name: "Dr. Adebayo Johnson",
    role: "Principal",
    campus: "Optimus Main Campus",
    initials: "AJ",
    color: "bg-blue-600",
  },
  {
    name: "Mrs. Funke Okafor",
    role: "Vice Principal Academics",
    campus: "Optimus Main Campus",
    initials: "FO",
    color: "bg-purple-600",
  },
  {
    name: "Mr. Chukwuma Eze",
    role: "Head of Administration",
    campus: "Optimus Main Campus",
    initials: "CE",
    color: "bg-green-600",
  },
  {
    name: "Mrs. Ngozi Adeyemi",
    role: "Head of HR",
    campus: "Optimus Main Campus",
    initials: "NA",
    color: "bg-rose-600",
  },
  {
    name: "Mrs. Amina Bello",
    role: "Head of Early Years",
    campus: "Optimus Nursery",
    initials: "AB",
    color: "bg-amber-600",
  },
  {
    name: "Mr. David Okonkwo",
    role: "Head of Primary",
    campus: "Optimus Primary",
    initials: "DO",
    color: "bg-teal-600",
  },
  {
    name: "Mrs. Grace Iwuoha",
    role: "Head of Secondary",
    campus: "Optimus High School",
    initials: "GI",
    color: "bg-indigo-600",
  },
  {
    name: "Mr. Tunde Bakare",
    role: "Bursar",
    campus: "Optimus Main Campus",
    initials: "TB",
    color: "bg-cyan-600",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-700 text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#012f5b] mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Highly professional and well-trained staff with years of experience dedicated to your child's success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative mb-4 mx-auto w-40 h-40">
                <div className={`w-full h-full ${member.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-white text-3xl font-bold">{member.initials}</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 gold-gradient text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {member.role.split(' ').slice(0, 2).join(' ')}
                </div>
              </div>
              <h4 className="font-bold text-[#012f5b] mt-4">{member.name}</h4>
              <p className="text-amber-600 font-medium text-sm">{member.role}</p>
              <p className="text-gray-500 text-xs mt-1">{member.campus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
