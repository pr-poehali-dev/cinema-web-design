import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ReviewCardProps {
  author: string;
  avatar: string;
  rating: number;
  text: string;
  movieTitle: string;
  date: string;
}

const ReviewCard = ({ author, avatar, rating, text, movieTitle, date }: ReviewCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold">{author}</h4>
              <div className="flex items-center gap-1 text-primary">
                <Icon name="Star" size={16} fill="currentColor" />
                <span className="font-semibold">{rating}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{movieTitle}</p>
          </div>
        </div>
        
        <p className="text-sm leading-relaxed mb-3">{text}</p>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Calendar" size={14} />
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
