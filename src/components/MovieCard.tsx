import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MovieCardProps {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  description: string;
  type: 'movie' | 'series';
}

const MovieCard = ({ title, year, genre, rating, image, description }: MovieCardProps) => {
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 font-bold">
          <Icon name="Star" size={16} />
          {rating}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Icon name="Calendar" size={16} />
            {year}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Film" size={16} />
            {genre}
          </span>
        </div>
        <Button className="w-full" variant="default">
          <Icon name="Play" size={18} className="mr-2" />
          Смотреть
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;