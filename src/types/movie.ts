export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  image: string;
  description: string;
}

export interface Series extends Movie {
  seasons: number;
  episodes: number;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  text: string;
  movieTitle: string;
  date: string;
}
