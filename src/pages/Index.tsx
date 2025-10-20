import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/f3d84069-461d-4080-af11-0ac853765e0c.jpg" 
                alt="НКК Логотип" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-900">Независимая Корпорация Красоты</h1>
                <p className="text-sm text-gray-600">Профессиональное косметологическое оборудование</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">О компании</button>
              <button onClick={() => scrollToSection('alma')} className="text-gray-700 hover:text-blue-600 transition">Alma Lasers</button>
              <button onClick={() => scrollToSection('classys')} className="text-gray-700 hover:text-blue-600 transition">CLASSYS</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-blue-600 transition">Контакты</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ведущий поставщик косметологического оборудования</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Официальный дистрибьютор премиальных брендов Alma Lasers и CLASSYS в России</p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection('contacts')}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">О компании</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Независимая Корпорация Красоты</strong> уже много лет успешно работает на российском рынке профессионального косметологического оборудования. 
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Мы являемся официальным партнером мировых лидеров индустрии красоты — израильского производителя <strong>Alma Lasers</strong> и южнокорейской компании <strong>CLASSYS</strong>.
            </p>
            <p className="text-lg text-gray-700">
              Наша миссия — предоставлять косметологическим клиникам и салонам красоты передовые технологии, которые помогают специалистам достигать превосходных результатов и удовлетворять самые высокие требования клиентов.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold text-lg mb-2">Официальный дистрибьютор</h4>
                <p className="text-gray-600">Прямые поставки от производителей с гарантией качества</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold text-lg mb-2">Профессиональная поддержка</h4>
                <p className="text-gray-600">Консультации экспертов и техническое сопровождение</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="ShieldCheck" size={48} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold text-lg mb-2">Гарантия и сервис</h4>
                <p className="text-gray-600">Полное гарантийное и постгарантийное обслуживание</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alma Lasers Section */}
      <section id="alma" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Продукция Alma Lasers</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Израильский производитель №1 в мире по инновационным решениям в эстетической медицине и косметологии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/53743d9c-7595-4884-aae0-09b6fb54e641.jpg"
                  alt="Harmony XL Pro"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Harmony XL Pro</h4>
                <p className="text-gray-600 mb-4">
                  Универсальная платформа для решения широкого спектра эстетических задач: омоложение кожи, удаление пигментации, лечение сосудистых патологий, эпиляция.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Омоложение</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Пигментация</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Сосуды</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/5c2f3864-ece5-470e-bf6b-1b7968c92e53.jpg"
                  alt="Soprano Ice"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Soprano Ice</h4>
                <p className="text-gray-600 mb-4">
                  Революционная технология лазерной эпиляции с охлаждением. Безболезненная процедура для всех типов кожи и волос. Максимальная эффективность и комфорт.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Эпиляция</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Безболезненно</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Все типы кожи</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/9086c375-589e-45e6-9c31-4e102a356c3e.jpg"
                  alt="Accent Prime"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Accent Prime</h4>
                <p className="text-gray-600 mb-4">
                  Передовая платформа для коррекции фигуры, лечения целлюлита и подтяжки кожи. Сочетание ультразвука и радиочастоты для впечатляющих результатов.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Коррекция фигуры</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Целлюлит</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Подтяжка</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CLASSYS Section */}
      <section id="classys" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Продукция CLASSYS</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Южнокорейский лидер в производстве высокотехнологичного оборудования для эстетической медицины
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/297eb04f-9940-4fda-9d88-21c699225cd0.jpg"
                  alt="Ultraformer III"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Ultraformer III</h4>
                <p className="text-gray-600 mb-4">
                  HIFU-технология для безоперационного лифтинга лица и тела. Глубокое воздействие на кожу с эффектом подтяжки без хирургического вмешательства.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">HIFU-лифтинг</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Безоперационно</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Омоложение</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/4287821d-1d73-4071-8bab-473ea5367be6.jpg"
                  alt="Clatuu Alpha"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Clatuu Alpha</h4>
                <p className="text-gray-600 mb-4">
                  Криолиполиз — неинвазивная методика уменьшения жировых отложений. Безопасное разрушение жировых клеток с помощью контролируемого охлаждения.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Криолиполиз</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Уменьшение жира</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Безопасно</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/e285b927-0810-4320-bfa0-c9d3d51dba9b.jpg"
                  alt="Volnewmer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Volnewmer</h4>
                <p className="text-gray-600 mb-4">
                  Инновационная система для объемного моделирования и коррекции фигуры. Комплексное воздействие на проблемные зоны для идеальных контуров тела.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Моделирование</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Коррекция фигуры</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Контуринг</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">Контакты</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-6">Свяжитесь с нами</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Адрес:</p>
                      <p className="text-gray-700">123112, г. Москва,<br />наб. Пресненская, д. 12</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <a href="tel:84993907832" className="text-blue-600 hover:underline">8 (499) 390-78-32</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <a href="mailto:nkk-llc@list.ru" className="text-blue-600 hover:underline">nkk-llc@list.ru</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Время работы:</p>
                      <p className="text-gray-700">
                        Пн-Пт: 10:00 - 19:00<br />
                        Сб-Вс: Выходной
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-6">Отправить запрос</h4>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить запрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/f3d84069-461d-4080-af11-0ac853765e0c.jpg" 
                alt="НКК" 
                className="h-10 w-10 object-contain bg-white rounded p-1"
              />
              <div>
                <p className="font-semibold">Независимая Корпорация Красоты</p>
                <p className="text-sm text-blue-200">Официальный дистрибьютор Alma Lasers и CLASSYS</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-blue-200">© 2024 НКК. Все права защищены.</p>
              <p className="text-sm text-blue-200">8 (499) 390-78-32 | nkk-llc@list.ru</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
