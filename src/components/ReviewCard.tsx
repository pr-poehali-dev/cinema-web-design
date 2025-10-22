import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  movieTitle: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { author, movieTitle, rating, text, date } = review;
  return (
    <Card className="h-full hover:shadow-lg transition-shadow bg-white/10 border-white/20">
      <CardContent className="p-6 text-white">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-bold text-lg">{author}</h4>
            <p className="text-sm text-white/70">{movieTitle}</p>
          </div>
          <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full">
            <Icon name="Star" size={14} />
            <span className="font-bold text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-white/90 mb-3">{text}</p>
        <p className="text-xs text-white/60">{date}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;