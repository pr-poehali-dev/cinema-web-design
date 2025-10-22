import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Icon name="Film" size={28} />
              <span>КиноМир</span>
            </div>
            <p className="text-secondary-foreground/80">
              Ваш онлайн кинотеатр с огромной коллекцией фильмов и сериалов в HD качестве
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="/" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="/movies" className="hover:text-white transition-colors">Фильмы</a></li>
              <li><a href="/series" className="hover:text-white transition-colors">Сериалы</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/80">
          <p>&copy; 2024 КиноМир. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;