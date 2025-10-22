import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Icon name="Film" size={28} />
              <span>КиноПоток</span>
            </div>
            <p className="text-secondary-foreground/80">
              Смотрите лучшие фильмы и сериалы онлайн в высоком качестве. 
              Большая коллекция контента для всей семьи.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Главная</a></li>
              <li><a href="/movies" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Фильмы</a></li>
              <li><a href="/series" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Сериалы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Icon name="Mail" size={18} />
                <span>info@kinopotok.ru</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Icon name="Phone" size={18} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-secondary-foreground/60">
          <p>&copy; 2025 КиноПоток. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
