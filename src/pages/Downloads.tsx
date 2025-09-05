import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Download Website Screenshots</h1>
          <p className="mt-2 text-muted-foreground">Click a button to download the high-quality image.</p>
        </header>

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
                style={{ aspectRatio: '9/16' }}
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
                style={{ aspectRatio: '9/16' }}
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
    </main>
  );
};

export default Downloads;
