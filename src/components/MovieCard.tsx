import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface MovieCardProps {
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
}

const MovieCard = ({ title, year, genre, rating, image }: MovieCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold flex items-center gap-1">
          <Icon name="Star" size={16} fill="currentColor" />
          {rating}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>{year}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Badge variant="secondary">{genre}</Badge>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
