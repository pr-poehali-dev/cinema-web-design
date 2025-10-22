import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="bg-muted p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <Input
            type="text"
            placeholder="Поиск по названию..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        
        <Select value={genre} onValueChange={setGenre}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Жанр" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все жанры</SelectItem>
            <SelectItem value="action">Боевик</SelectItem>
            <SelectItem value="comedy">Комедия</SelectItem>
            <SelectItem value="drama">Драма</SelectItem>
            <SelectItem value="thriller">Триллер</SelectItem>
            <SelectItem value="fantasy">Фантастика</SelectItem>
            <SelectItem value="horror">Ужасы</SelectItem>
            <SelectItem value="detective">Детектив</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Год" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все годы</SelectItem>
            {years.map(y => (
              <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button onClick={handleSearch} className="w-full md:w-auto mt-4 h-12 px-8" size="lg">
        <Icon name="Search" size={20} className="mr-2" />
        Найти
      </Button>
    </div>
  );
};

export default SearchBar;
