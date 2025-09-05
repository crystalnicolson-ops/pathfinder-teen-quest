import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

// Import all personality avatars
import avatarStrategist from '@/assets/avatar-strategist.jpg';
import avatarInventor from '@/assets/avatar-inventor.jpg';
import avatarBoss from '@/assets/avatar-boss.jpg';
import avatarChallenger from '@/assets/avatar-challenger.jpg';
import avatarVisionary from '@/assets/avatar-visionary.jpg';
import avatarCreator from '@/assets/avatar-creator.jpg';
import avatarCoach from '@/assets/avatar-coach.jpg';
import avatarFreeSpirit from '@/assets/avatar-free-spirit.jpg';
import avatarOrganizer from '@/assets/avatar-organizer.jpg';
import avatarHelper from '@/assets/avatar-helper.jpg';
import avatarManager from '@/assets/avatar-manager.jpg';
import avatarHost from '@/assets/avatar-host.jpg';
import avatarFixer from '@/assets/avatar-fixer.jpg';
import avatarArtist from '@/assets/avatar-artist.jpg';
import avatarAdventurer from '@/assets/avatar-adventurer.jpg';
import avatarPerformer from '@/assets/avatar-performer.jpg';

const Downloads: React.FC = () => {
  useEffect(() => {
    document.title = "Download Website Screenshots | Personality Traits";
    const desc = "Download high-quality screenshots of the Personality Traits website.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
  }, []);

  const personalityTypes = [
    { name: 'The Strategist', avatar: avatarStrategist },
    { name: 'The Inventor', avatar: avatarInventor },
    { name: 'The Boss', avatar: avatarBoss },
    { name: 'The Challenger', avatar: avatarChallenger },
    { name: 'The Visionary', avatar: avatarVisionary },
    { name: 'The Creator', avatar: avatarCreator },
    { name: 'The Coach', avatar: avatarCoach },
    { name: 'The Free Spirit', avatar: avatarFreeSpirit },
    { name: 'The Organizer', avatar: avatarOrganizer },
    { name: 'The Helper', avatar: avatarHelper },
    { name: 'The Manager', avatar: avatarManager },
    { name: 'The Host', avatar: avatarHost },
    { name: 'The Fixer', avatar: avatarFixer },
    { name: 'The Artist', avatar: avatarArtist },
    { name: 'The Adventurer', avatar: avatarAdventurer },
    { name: 'The Performer', avatar: avatarPerformer },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Downloads</h1>
          <p className="mt-2 text-muted-foreground">Download high-quality website screenshots and character images.</p>
        </header>

        <div className="grid gap-8">
          {/* Website Screenshots Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Website Screenshots</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Homepage Screenshot (Captured)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src="/landing-screenshot.png"
                    alt="Homepage screenshot - Personality Traits"
                    className="max-w-md mx-auto block rounded-md border border-border"
                    loading="lazy"
                  />
                  <Button asChild>
                    <a href="/landing-screenshot.png" download>
                      <Download className="mr-2" /> Download PNG
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Homepage Screenshot (Generated)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src="/website-screenshot.png"
                    alt="Homepage screenshot (generated) - Personality Traits"
                    className="max-w-md mx-auto block rounded-md border border-border"
                    loading="lazy"
                  />
                  <Button asChild variant="secondary">
                    <a href="/website-screenshot.png" download>
                      <Download className="mr-2" /> Download PNG
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Character Images Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Personality Type Characters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {personalityTypes.map((type) => (
                <Card key={type.name} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{type.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted">
                      <img 
                        src={type.avatar} 
                        alt={`${type.name} character avatar`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <a href={type.avatar} download={`${type.name.toLowerCase().replace(/\s+/g, '-')}-avatar.jpg`}>
                        <Download className="mr-2 h-3 w-3" /> Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Downloads;
