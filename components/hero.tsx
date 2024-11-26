import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full brightness-[0.4]"
          poster="https://images.unsplash.com/photo-1572816225927-d08fb138f2b2?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/553923596/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=70e325fbe835c8b7c9bebc0b299024c8c364c3f0c38ed80e55e8ee4fd5180f86"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative container px-4 md:px-6 py-32 md:py-44">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              A New Nigeria<br />Is Emerging
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Empowering communities through civic values. A bold new initiative aimed at tackling Nigeria's pressing social challenges.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">
                Support Our Cause
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-white">
              <a href="#programs">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}