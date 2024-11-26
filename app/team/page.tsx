import Image from "next/image";

export default function TeamPage() {
  const team = [
    {
      name: "Ndidi Mbagwu",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "A visionary leader with extensive experience in educational development and community empowerment across Nigeria. Under her leadership, FREE Nigeria Foundation has expanded its reach to all 36 states of the federation."
    },
    {
      name: "Dr Moses Paul",
      role: "Director of Programs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "With over 15 years of experience in educational program development, Dr. Paul has been instrumental in designing and implementing our core literacy and teacher training initiatives throughout Nigeria."
    },
    {
      name: "Dr David Ogula",
      role: "Chief Strategy Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "A renowned education policy expert, Dr. Ogula brings his extensive knowledge of the Nigerian education system to develop strategic initiatives that create lasting impact in communities across the nation."
    },
    {
      name: "Jeffrey Peterson",
      role: "Director of International Partnerships",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80",
      bio: "Leading our international collaboration efforts, Mr. Peterson has been crucial in building partnerships that strengthen our ability to serve Nigerian communities and expand our educational programs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container px-4 md:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Team</h1>
          <p className="mt-4 text-lg text-gray-500">
            Meet the dedicated professionals working to create positive change in Nigeria
          </p>
        </div>
        <div className="space-y-16">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Profile Photo Coming Soon
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                <p className="text-lg font-medium text-primary">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}