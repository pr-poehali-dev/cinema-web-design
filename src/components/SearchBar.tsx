import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface SearchBarProps {
  onSearch: (query: string, genre: string, year: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');
  const [year, setYear] = useState('all');

  const handleSearch = () => {
    onSearch(query, genre, year);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <Input
            placeholder="Поиск по названию..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="h-11"
          />
        </div>
        
        <Select value={genre} onValueChange={setGenre}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Жанр" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все жанры</SelectItem>
            <SelectItem value="action">Боевик</SelectItem>
            <SelectItem value="comedy">Комедия</SelectItem>
            <SelectItem value="drama">Драма</SelectItem>
            <SelectItem value="fantasy">Фантастика</SelectItem>
            <SelectItem value="horror">Ужасы</SelectItem>
            <SelectItem value="thriller">Триллер</SelectItem>
          </SelectContent>
        </Select>

        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Год" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все годы</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        onClick={handleSearch} 
        className="w-full mt-4"
        size="lg"
      >
        <Icon name="Search" size={20} className="mr-2" />
        Найти
      </Button>
    </div>
  );
};

export default SearchBar;
