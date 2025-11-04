import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  image: string;
}

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks: Track[] = [
    {
      id: 1,
      title: 'Cosmic Drift',
      artist: 'Parallel Echoes',
      duration: '4:32',
      image: 'https://cdn.poehali.dev/projects/b53a1b21-e4cb-4540-9e84-df60af8b9f91/files/4e851712-426a-4173-9a5b-7cf7a6cd56ef.jpg'
    },
    {
      id: 2,
      title: 'Nebula Dreams',
      artist: 'Quantum Waves',
      duration: '5:18',
      image: 'https://cdn.poehali.dev/projects/b53a1b21-e4cb-4540-9e84-df60af8b9f91/files/4e851712-426a-4173-9a5b-7cf7a6cd56ef.jpg'
    },
    {
      id: 3,
      title: 'Stardust Memories',
      artist: 'Void Travelers',
      duration: '3:56',
      image: 'https://cdn.poehali.dev/projects/b53a1b21-e4cb-4540-9e84-df60af8b9f91/files/4e851712-426a-4173-9a5b-7cf7a6cd56ef.jpg'
    },
    {
      id: 4,
      title: 'Gravity Waves',
      artist: 'Parallel Echoes',
      duration: '6:12',
      image: 'https://cdn.poehali.dev/projects/b53a1b21-e4cb-4540-9e84-df60af8b9f91/files/4e851712-426a-4173-9a5b-7cf7a6cd56ef.jpg'
    },
    {
      id: 5,
      title: 'Hyperspace Journey',
      artist: 'Cosmic Collective',
      duration: '4:45',
      image: 'https://cdn.poehali.dev/projects/b53a1b21-e4cb-4540-9e84-df60af8b9f91/files/4e851712-426a-4173-9a5b-7cf7a6cd56ef.jpg'
    },
    {
      id: 6,
      title: 'Infinite Horizon',
      artist: 'Void Travelers',
      duration: '5:33',
      image: 'https://cdn.poehali.dev/projects/b53a1b21-e4cb-4540-9e84-df60af8b9f91/files/4e851712-426a-4173-9a5b-7cf7a6cd56ef.jpg'
    }
  ];

  const handlePlayPause = (trackId: number) => {
    if (currentTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-7xl font-heading font-black mb-4 glow-text">
            МУЗЫКА ИЗ ПАРАЛЛЕЛЬНОЙ ВСЕЛЕННОЙ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Погрузись в космическое путешествие сквозь звёздные галактики и неоновые миры
          </p>
        </header>

        <section className="mb-20">
          <div className="relative h-[500px] rounded-3xl overflow-hidden glow animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/b53a1b21-e4cb-4540-9e84-df60af8b9f91/files/4e851712-426a-4173-9a5b-7cf7a6cd56ef.jpg"
              alt="Cosmic Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-2xl px-12 py-8 rounded-full glow animate-pulse-glow font-heading font-bold"
              >
                <Icon name="Play" className="mr-3" size={32} />
                НАЧАТЬ ПУТЕШЕСТВИЕ
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-heading font-bold mb-8 glow-text">Треки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <Card 
                key={track.id}
                className="group bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden hover:scale-105 hover:glow cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={() => handlePlayPause(track.id)}
                      className="rounded-full w-16 h-16 bg-primary hover:bg-primary/80 glow"
                    >
                      <Icon 
                        name={currentTrack === track.id && isPlaying ? "Pause" : "Play"} 
                        size={28}
                      />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 text-primary">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">{track.artist}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-secondary">
                      <Icon name="Clock" size={16} className="mr-2" />
                      {track.duration}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:text-primary"
                      >
                        <Icon name="Heart" size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:text-primary"
                      >
                        <Icon name="Share2" size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {currentTrack && (
          <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border p-6 animate-slide-up glow">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={tracks.find(t => t.id === currentTrack)?.image}
                  alt="Current Track"
                  className="w-16 h-16 rounded-lg glow"
                />
                <div>
                  <h4 className="font-heading font-bold text-primary">
                    {tracks.find(t => t.id === currentTrack)?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {tracks.find(t => t.id === currentTrack)?.artist}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <Button variant="ghost" size="sm">
                  <Icon name="SkipBack" size={24} />
                </Button>
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full w-14 h-14 bg-primary hover:bg-primary/80 glow"
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="SkipForward" size={24} />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <Icon name="Volume2" size={20} className="text-muted-foreground" />
                <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
