import { Users, Target, Heart, Award } from "lucide-react";

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/api/placeholder/96/96",
    bio: "Former financial advisor with 10+ years experience in personal finance."
  },
  {
    name: "Maria Rodriguez",
    role: "Lead Developer",
    image: "/api/placeholder/96/96",
    bio: "Full-stack developer passionate about creating intuitive user experiences."
  },
  {
    name: "James Chen",
    role: "Product Designer",
    image: "/api/placeholder/96/96",
    bio: "UX/UI designer focused on making complex financial data accessible."
  },
  {
    name: "Sarah Williams",
    role: "Growth Manager",
    image: "/api/placeholder/96/96",
    bio: "Marketing expert dedicated to helping people achieve financial freedom."
  }
];

const milestones = [
  { year: "2018", event: "Founded with a vision to democratize financial tools" },
  { year: "2019", event: "Reached 100,000 active users" },
  { year: "2020", event: "Launched mobile apps for iOS and Android" },
  { year: "2021", event: "Passed 1 million users milestone" },
  { year: "2022", event: "Introduced family plan and shared wallets" },
  { year: "2023", event: "Expanded to 150+ countries worldwide" }
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves financial freedom. Our mission is to make personal 
            finance management accessible, intuitive, and empowering for people around the world.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">User First</h3>
            <p className="text-gray-600">
              Every feature is designed with our users' needs and feedback at the forefront.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Transparency</h3>
            <p className="text-gray-600">
              We're open about our practices and committed to honest financial guidance.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Impact Driven</h3>
            <p className="text-gray-600">
              We measure success by the positive financial impact we create for our users.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {milestone.year}
                      </h4>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="text-center mt-20">
          <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Award-Winning Platform
          </h3>
          <p className="text-gray-600 mb-6">
            Recognized by leading industry experts for innovation and user experience
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Best Finance App 2023</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Editor's Choice</div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">Top Productivity App</div>
          </div>
        </div>
      </div>
    </section>
  );
}