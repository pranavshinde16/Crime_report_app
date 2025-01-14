import { PhoneCall, BookOpen, Users, Heart, Shield } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Emergency Contacts",
      description:
        "24/7 hotlines and emergency services for immediate assistance",
      icon: <PhoneCall className="w-6 h-6 text-red-500" />,
      links: [
        { name: "National Emergency: 911", href: "tel:911" },
        { name: "National Domestic Violence Hotline", href: "tel:18007997233" },
        { name: "Sexual Assault Hotline", href: "tel:18006564673" },
      ],
    },
    {
      title: "Support Organizations",
      description:
        "Organizations dedicated to helping survivors and preventing abuse",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      links: [
        { name: "RAINN", href: "https://www.rainn.org" },
        {
          name: "National Network to End Domestic Violence",
          href: "https://nnedv.org",
        },
        { name: "Love Is Respect", href: "https://www.loveisrespect.org" },
      ],
    },
    {
      title: "Legal Resources",
      description: "Legal information and support services",
      icon: <Shield className="w-6 h-6 text-green-500" />,
      links: [
        { name: "Legal Aid", href: "https://www.lsc.gov/what-legal-aid" },
        { name: "Victim Rights Law Center", href: "https://victimrights.org" },
        { name: "WomensLaw.org", href: "https://www.womenslaw.org" },
      ],
    },
    {
      title: "Educational Resources",
      description: "Information about safety, prevention, and recovery",
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      links: [
        { name: "Safety Planning", href: "#" },
        { name: "Understanding Abuse", href: "#" },
        { name: "Recovery Resources", href: "#" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
            Support Resources
          </h1>
          <p className="text-zinc-400">
            Access helpful resources, support services, and information.
            Remember, you're not alone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="p-6 bg-black/40 border border-white/5 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5">{resource.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">
                    {resource.description}
                  </p>
                  <ul className="space-y-2">
                    {resource.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
