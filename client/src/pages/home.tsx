import { motion } from "framer-motion";
import { 
  Sword, 
  Target, 
  Brain, 
  ChevronDown,
  Play,
  Radio,
  ExternalLink,
  Heart,
  Users,
  Calendar,
  MapPin,
  Gamepad2,
  Trophy,
  Skull,
  Palette,
  X,
  Star,
  TrendingUp
} from "lucide-react";
import { SiX } from "react-icons/si";
import { SiYoutube, SiTwitch } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImage from "@assets/generated_images/e70169fb-cf49-4e90-8815-008e411ba957-profile_banner-480.jpeg";
import fanArt1 from "@assets/generated_images/download.jpg";
import fanArt2 from "@assets/generated_images/Legend.jpg";
import fanArt4 from "@assets/generated_images/siuuu.jpg";
import fanArt5 from "@assets/generated_images/artworks-rUKXtVw3cA3TFRtd-ohevmw-t500x500.jpg";
import fanArt6 from "@assets/generated_images/ClownPierce.webp";
import fanArt7 from "@assets/generated_images/ClownPierce-Merch-6-1024x1024.jpeg";
import fanArt8 from "@assets/generated_images/moneysmp_bg.jpg";
import fanArt9 from "@assets/generated_images/download(1).jpg";
import fanArt10 from "@assets/generated_images/#wearelifesteal #lifestealsmp #deadliestsmp #Hannahxxrose #Vitalasy #TheTerrain #Vort3xDragon #Woogiex #Reddoons #PrinceZam #PlanetLord #.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navigation() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 p-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}

function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`}}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" aria-hidden="true" />
      
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Badge 
            variant="outline" 
            className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-primary/50 bg-primary/10 text-white backdrop-blur-sm"
            data-testid="badge-hero-tagline"
          >
            <Skull className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            MINECRAFT PVP LEGEND
          </Badge>
        </motion.div>
        
        <motion.h1 
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-3 sm:mb-4 text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          data-testid="text-hero-title"
        >
          CLOWN<span className="text-primary">PIERCE</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-white/90 mb-3 sm:mb-4 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          data-testid="text-hero-subtitle"
        >
          THE DEADLIEST PLAYER
        </motion.p>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          data-testid="text-hero-description"
        >
          Dutch Minecraft YouTuber dominating the PvP scene with ruthless precision and story-driven content
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="https://youtube.com/ClownPierce" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-md"
              data-testid="button-watch-youtube"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch on YouTube
            </Button>
          </a>
          <a 
            href="https://twitch.tv/clownpierce" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-md bg-white/10 border-white/30 text-white"
              data-testid="button-follow-twitch"
            >
              <Radio className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Follow on Twitch
            </Button>
          </a>
        </motion.div>
      </motion.div>
      
      <motion.button
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.6 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
      </motion.button>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { icon: Users, value: "1M+", label: "Subscribers" },
    { icon: Gamepad2, value: "5+", label: "SMPs Played" },
    { icon: Trophy, value: "#1", label: "PvP Ranking" },
    { icon: Calendar, value: "2020", label: "Channel Started" }
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)]" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="secondary" className="mb-4" data-testid="badge-about-location">
              <MapPin className="w-3 h-3 mr-1" />
              Netherlands
            </Badge>
            <h2 
              id="about-title"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6" 
              data-testid="text-about-title"
            >
              The Rise of a <span className="text-primary">Legend</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p data-testid="text-about-paragraph-1">
                Born on <span className="text-foreground font-medium">March 19, 2002</span>, ClownPierce emerged from the Netherlands to become one of the most feared names in Minecraft PvP history.
              </p>
              <p data-testid="text-about-paragraph-2">
                Since launching his YouTube channel in <span className="text-foreground font-medium">October 2020</span>, he has built an empire of over one million subscribers, drawn by his unmatched combat skills and strategic brilliance.
              </p>
              <p data-testid="text-about-paragraph-3">
                Known as "The Deadliest Player," his reputation precedes him on every server he joins. His ruthless, calculated approach to PvP has made him a legend on the LifeSteal SMP and beyond.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-3 sm:gap-4"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Card className="p-4 sm:p-6 text-center hover-elevate" data-testid={`card-stat-${index}`}>
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1" 
                    data-testid={`text-stat-value-${index}`}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide" 
                    data-testid={`text-stat-label-${index}`}
                  >
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PlaystyleSection() {
  const features = [
    {
      icon: Sword,
      title: "PvP Specialist",
      description: "Ruthless combat tactics and unmatched mechanical skill make every battle a statement of dominance. No mercy, no hesitation."
    },
    {
      icon: Target,
      title: "Story-Driven Content",
      description: "Creator of 'Friend or Foe' and other narrative-rich series that blend survival pressure, intense battles, and player-driven drama."
    },
    {
      icon: Brain,
      title: "Strategic Dominance",
      description: "Cold, calculated gameplay that outsmarts opponents before the fight even begins. Every move is planned, every victory earned."
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-card/50"
      aria-labelledby="playstyle-title"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-playstyle-label">
            <Skull className="w-3 h-3 mr-1" />
            PLAYSTYLE
          </Badge>
          <h2 
            id="playstyle-title"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4" 
            data-testid="text-playstyle-title"
          >
            What Makes Him <span className="text-primary">Deadly</span>
          </h2>
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-playstyle-subtitle"
          >
            A unique combination of skill, strategy, and storytelling that sets ClownPierce apart from every other player
          </p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Card 
                className="p-6 sm:p-8 h-full hover-elevate border-primary/10"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 
                  className="text-lg sm:text-xl font-heading font-semibold mb-2 sm:mb-3" 
                  data-testid={`text-feature-title-${index}`}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed" 
                  data-testid={`text-feature-desc-${index}`}
                >
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServerHistorySection() {
  const servers = [
    {
      name: "LifeSteal SMP",
      role: "Legendary Member",
      description: "The brutal multiplayer server where ClownPierce built his reputation. Players steal hearts by eliminating opponents, and he became the most feared hunter.",
      highlighted: true
    },
    {
      name: "The Realm SMP",
      role: "Current Member",
      description: "Tubbo's newest SMP adventure where ClownPierce continues to showcase his deadly skills to a new audience of players.",
      highlighted: false
    },
    {
      name: "HCSMP",
      role: "Former Member",
      description: "A hardcore survival multiplayer experience where one death means permanent elimination. ClownPierce thrived under the pressure.",
      highlighted: false
    },
    {
      name: "MagicGum SMP",
      role: "Former Member",
      description: "Featured unique gameplay mechanics and intense PvP scenarios that allowed ClownPierce to demonstrate versatile combat skills.",
      highlighted: false
    },
    {
      name: "Rizen SMP",
      role: "Former Member",
      description: "Another battleground where ClownPierce left his mark, building alliances and dismantling enemies with surgical precision.",
      highlighted: false
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      aria-labelledby="servers-title"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-servers-label">
            <Gamepad2 className="w-3 h-3 mr-1" />
            SERVER HISTORY
          </Badge>
          <h2 
            id="servers-title"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4" 
            data-testid="text-servers-title"
          >
            Battlegrounds of a <span className="text-primary">Champion</span>
          </h2>
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-servers-subtitle"
          >
            From LifeSteal to The Realm, every server tells a story of conquest and dominance
          </p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {servers.map((server, index) => (
            <motion.div 
              key={server.name} 
              variants={fadeInUp}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card 
                className={`p-5 sm:p-6 h-full hover-elevate ${
                  server.highlighted 
                    ? "border-primary/30 bg-primary/5" 
                    : ""
                }`}
                data-testid={`card-server-${index}`}
              >
                <div className="flex flex-wrap items-start justify-between mb-3 sm:mb-4 gap-2">
                  <h3 
                    className="text-lg sm:text-xl font-heading font-semibold" 
                    data-testid={`text-server-name-${index}`}
                  >
                    {server.name}
                  </h3>
                  {server.highlighted && (
                    <Badge variant="default" className="shrink-0" data-testid="badge-server-main">
                      <Heart className="w-3 h-3 mr-1" />
                      Main
                    </Badge>
                  )}
                </div>
                <Badge 
                  variant="secondary" 
                  className="mb-3" 
                  data-testid={`badge-server-role-${index}`}
                >
                  {server.role}
                </Badge>
                <p 
                  className="text-sm text-muted-foreground leading-relaxed" 
                  data-testid={`text-server-desc-${index}`}
                >
                  {server.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FanArtGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const artworks = [
    { src: fanArt1, title: "The Dark Warrior", artist: "Fan Artist" },
    { src: fanArt2, title: "Victory Stands Alone", artist: "Fan Artist" },
    { src: fanArt4, title: "Mountain of Victories", artist: "Fan Artist" },
    { src: fanArt5, title: "Throne of the Deadliest", artist: "Fan Artist" },
    { src: fanArt6, title: "Combat Unleashed", artist: "Fan Artist" }
    , { src: fanArt7, title: "ClownPierce Merch Design", artist: "Fan Artist" }
    , { src: fanArt8, title: "Money SMP Background", artist: "Fan Artist" }
    , { src: fanArt9, title: "Epic Battle Scene", artist: "Fan Artist" }
    , { src: fanArt10, title: "Legend in lifesteal SMP", artist: "Fan Artist" }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      aria-labelledby="fanart-title"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-fanart-label">
            <Palette className="w-3 h-3 mr-1" />
            FAN ART
          </Badge>
          <h2 
            id="fanart-title"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4" 
            data-testid="text-fanart-title"
          >
            Community <span className="text-primary">Creations</span>
          </h2>
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-fanart-subtitle"
          >
            Incredible artwork inspired by the legend himself
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {artworks.map((artwork, index) => (
            <motion.div 
              key={artwork.title} 
              variants={fadeInUp}
              className={index === 3 ? "col-span-2 md:col-span-1" : ""}
            >
              <Card 
                className="overflow-visible group cursor-pointer hover-elevate"
                onClick={() => setSelectedImage(artwork.src)}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.key === 'Enter' && setSelectedImage(artwork.src)}
                tabIndex={0}
                role="button"
                aria-label={`View ${artwork.title} full size`}
                data-testid={`card-fanart-${index}`}
              >
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <img 
                    src={artwork.src} 
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-fanart-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-medium text-sm sm:text-base truncate" data-testid={`text-fanart-title-${index}`}>
                      {artwork.title}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close image"
            data-testid="button-close-fanart-modal"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Fan art full view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              data-testid="img-fanart-modal"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function VideoGallery() {
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "I Became The MOST FEARED Player",
      views: "2.5M views",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Friend or Foe - Season Finale",
      views: "1.8M views",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "The Hunt Begins - LifeSteal SMP",
      views: "3.2M views",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-card/50"
      aria-labelledby="videos-title"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-videos-label">
            <Play className="w-3 h-3 mr-1" />
            FEATURED VIDEOS
          </Badge>
          <h2 
            id="videos-title"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4" 
            data-testid="text-videos-title"
          >
            Watch the <span className="text-primary">Action</span>
          </h2>
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-videos-subtitle"
          >
            Experience ClownPierce's most legendary moments on YouTube
          </p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {videos.map((video, index) => (
            <motion.a
              key={`${video.id}-${index}`}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              data-testid={`link-video-${index}`}
            >
              <Card className="overflow-visible group hover-elevate cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-t-md">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 
                    className="font-semibold text-sm sm:text-base line-clamp-2 mb-1" 
                    data-testid={`text-video-title-${index}`}
                  >
                    {video.title}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm text-muted-foreground" 
                    data-testid={`text-video-views-${index}`}
                  >
                    {video.views}
                  </p>
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="https://youtube.com/ClownPierce" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" data-testid="button-view-all-videos">
              <Play className="w-4 h-4 mr-2" />
              View All Videos
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function MilestonesSection() {
  const milestones = [
    { date: "Oct 2020", title: "Channel Launch", description: "Started the YouTube journey", icon: Star },
    { date: "2021", title: "LifeSteal SMP", description: "Joined the server that changed everything", icon: Gamepad2 },
    { date: "2022", title: "100K Subscribers", description: "First major milestone reached", icon: TrendingUp },
    { date: "2023", title: "500K Subscribers", description: "Half a million strong", icon: Users },
    { date: "2024", title: "1M+ Subscribers", description: "Became a millionaire creator", icon: Trophy },
    { date: "Dec 2024", title: "The Realm SMP", description: "Joined Tubbo's newest adventure", icon: Heart }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      aria-labelledby="milestones-title"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-milestones-label">
            <Trophy className="w-3 h-3 mr-1" />
            JOURNEY
          </Badge>
          <h2 
            id="milestones-title"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4" 
            data-testid="text-milestones-title"
          >
            Rise to <span className="text-primary">Greatness</span>
          </h2>
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-milestones-subtitle"
          >
            Key moments in ClownPierce's legendary journey
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" aria-hidden="true" />
          
          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.title}
                variants={fadeInUp}
                className={`relative flex items-start gap-4 sm:gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"} hidden sm:block`}>
                  <Card className="inline-block p-4 sm:p-6 hover-elevate" data-testid={`card-milestone-${index}`}>
                    <Badge variant="secondary" className="mb-2" data-testid={`badge-milestone-date-${index}`}>
                      {milestone.date}
                    </Badge>
                    <h3 className="font-heading font-semibold text-lg mb-1" data-testid={`text-milestone-title-${index}`}>
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-milestone-desc-${index}`}>
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <milestone.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1 sm:hidden">
                  <Card className="p-4 hover-elevate" data-testid={`card-milestone-mobile-${index}`}>
                    <Badge variant="secondary" className="mb-2">
                      {milestone.date}
                    </Badge>
                    <h3 className="font-heading font-semibold text-base mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialSection() {
  const socials = [
    {
      name: "YouTube",
      icon: Play,
      url: "https://youtube.com/ClownPierce",
      description: "1M+ Subscribers",
      color: "bg-red-600/10 text-red-500 dark:text-red-400"
    },
    {
      name: "Twitch",
      icon: Radio,
      url: "https://twitch.tv/clownpierce",
      description: "Live Streams",
      color: "bg-purple-600/10 text-purple-500 dark:text-purple-400"
    },
    {
      name: "Twitter/X",
      icon: SiX,
      url: "https://x.com/clown_pierce",
      description: "@clown_pierce",
      color: "bg-foreground/10 text-foreground"
    },
    {
      name: "Merch Store",
      icon: ExternalLink,
      url: "https://clownpiercemerch.com",
      description: "Official Merch",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-card/50"
      aria-labelledby="social-title"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-social-label">
            <Users className="w-3 h-3 mr-1" />
            CONNECT
          </Badge>
          <h2 
            id="social-title"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4" 
            data-testid="text-social-title"
          >
            Join the <span className="text-primary">Community</span>
          </h2>
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-social-subtitle"
          >
            Follow ClownPierce across all platforms for the latest content, streams, and updates
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {socials.map((social, index) => (
            <motion.div key={social.name} variants={fadeInUp}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ClownPierce on ${social.name}`}
                data-testid={`link-social-${index}`}
              >
                <Card className="p-5 sm:p-6 hover-elevate cursor-pointer">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shrink-0 ${social.color}`}>
                      <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 
                        className="text-base sm:text-lg font-semibold truncate" 
                        data-testid={`text-social-name-${index}`}
                      >
                        {social.name}
                      </h3>
                      <p 
                        className="text-sm text-muted-foreground truncate" 
                        data-testid={`text-social-desc-${index}`}
                      >
                        {social.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer 
      className="py-10 sm:py-12 px-4 sm:px-6 border-t border-border/50"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 
              className="text-xl sm:text-2xl font-heading font-bold mb-1" 
              data-testid="text-footer-title"
            >
              CLOWN<span className="text-primary">PIERCE</span>
            </h3>
            <p 
              className="text-sm text-muted-foreground" 
              data-testid="text-footer-tagline"
            >
              The Deadliest Player
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p 
              className="text-sm text-muted-foreground" 
              data-testid="text-footer-business"
            >
              Business:{" "}
              <a 
                href="mailto:clownpierce@dcmedia.tv" 
                className="text-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
              >
                clownpierce@dcmedia.tv
              </a>
            </p>
            <p 
              className="text-xs text-muted-foreground text-center md:text-right" 
              data-testid="text-footer-copyright"
            >
              Fan-made profile website. Not affiliated with ClownPierce.
            </p>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/30 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll back to top of page"
            data-testid="button-back-to-top"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PlaystyleSection />
        <ServerHistorySection />
        <FanArtGallery />
        <VideoGallery />
        <MilestonesSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
