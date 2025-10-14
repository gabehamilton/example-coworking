'use client';

interface CollaborationApplet {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

const applets: CollaborationApplet[] = [
  {
    id: '1',
    title: 'Meeting Room Scheduler',
    description: 'Book and manage meeting rooms in the coworking space',
    icon: '📅',
    category: 'Scheduling'
  },
  {
    id: '2',
    title: 'Project Board',
    description: 'Collaborate on projects with other members',
    icon: '📋',
    category: 'Collaboration'
  },
  {
    id: '3',
    title: 'Event Calendar',
    description: 'View and RSVP to community events',
    icon: '🎉',
    category: 'Events'
  },
  {
    id: '4',
    title: 'Member Directory',
    description: 'Connect with other coworking space members',
    icon: '👥',
    category: 'Networking'
  },
  {
    id: '5',
    title: 'Resource Library',
    description: 'Access shared resources and equipment',
    icon: '📚',
    category: 'Resources'
  },
  {
    id: '6',
    title: 'Skill Share',
    description: 'Offer and request skills from the community',
    icon: '🎓',
    category: 'Learning'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Welcome to the Coworking Space
          </h1>
          <p className="text-lg text-foreground/70">
            Collaboration tools and applets for our community members
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applets.map((applet) => (
            <div
              key={applet.id}
              className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 transition-all hover:shadow-lg hover:border-foreground/20 bg-background"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{applet.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {applet.title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">
                    {applet.description}
                  </p>
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-foreground/5 text-foreground/80">
                    {applet.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
