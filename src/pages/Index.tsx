import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/ab734423-3436-4377-a9c0-0e197b8c34c8.jpg" 
              alt="НКК Логотип" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">НКК</h1>
              <p className="text-xs text-muted-foreground">Независимая Корпорация Красоты</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукция</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Профессиональное косметологическое оборудование
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Официальный поставщик передового медицинского оборудования Alma Lasers и CLASSYS для эстетической медицины и косметологии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Package" size={20} className="mr-2" />
              Каталог оборудования
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              8 (499) 390-78-32
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Независимая Корпорация Красоты — ведущий поставщик профессионального косметологического оборудования в России. 
              Мы специализируемся на продаже высокотехнологичных аппаратов мировых брендов Alma Lasers и CLASSYS. 
              Наш многолетний опыт работы позволяет предлагать клиентам только проверенные решения для эстетической медицины, 
              обеспечивая полную техническую поддержку и сервисное обслуживание.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Официальный партнёр</h3>
              <p className="text-muted-foreground">Прямые поставки от производителей Alma Lasers и CLASSYS</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Полная поддержка</h3>
              <p className="text-muted-foreground">Техническое обслуживание и консультации специалистов</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Сертифицированное оборудование с гарантией производителя</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современное оборудование для эстетической медицины от ведущих мировых производителей
            </p>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-primary"></div>
              <h3 className="text-3xl font-bold">Alma Lasers</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <p className="text-muted-foreground mb-4">
                    Многофункциональная платформа для лазерной терапии. Удаление сосудистых и пигментных образований, омоложение кожи, лечение акне.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
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
                  <p className="text-muted-foreground mb-4">
                    Инновационная система для лазерной эпиляции. Безболезненная процедура на любых типах кожи круглый год с технологией SHR.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
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
                  <p className="text-muted-foreground mb-4">
                    Передовая платформа для контурирования тела и подтяжки кожи. Ультразвуковая и радиочастотная технологии для коррекции фигуры.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-primary"></div>
              <h3 className="text-3xl font-bold">CLASSYS</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <p className="text-muted-foreground mb-4">
                    HIFU-лифтинг нового поколения. Безоперационная подтяжка лица и тела с помощью микросфокусированного ультразвука.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
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
                  <p className="text-muted-foreground mb-4">
                    Криолиполиз — неинвазивное удаление жировых отложений. Эффективная коррекция фигуры без операций и восстановления.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
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
                  <p className="text-muted-foreground mb-4">
                    Интеллектуальная система для коррекции фигуры. Комплексное воздействие: вакуум, RF, LED-терапия для идеального результата.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для получения консультации
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">123112, Москва</p>
                  <p className="text-muted-foreground">Пресненская набережная, д. 12</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <a href="tel:+74993907832" className="text-primary hover:underline text-lg">
                    8 (499) 390-78-32
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:nkk-llc@list.ru" className="text-primary hover:underline">
                    nkk-llc@list.ru
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                  <p className="text-muted-foreground">Понедельник - Пятница: 10:00 - 19:00</p>
                  <p className="text-muted-foreground">Суббота - Воскресенье: Выходной</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Интересует оборудование..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/151d1c48-2949-40e9-bb5c-936e2c08713e/files/ab734423-3436-4377-a9c0-0e197b8c34c8.jpg" 
                  alt="НКК" 
                  className="h-10 w-10 object-contain bg-white rounded p-1"
                />
                <div>
                  <h3 className="font-bold text-lg">НКК</h3>
                  <p className="text-xs text-gray-400">Независимая Корпорация Красоты</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Официальный поставщик профессионального косметологического оборудования
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Бренды</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Alma Lasers</li>
                <li>CLASSYS</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>8 (499) 390-78-32</li>
                <li>nkk-llc@list.ru</li>
                <li>Пн-Пт: 10:00 - 19:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Независимая Корпорация Красоты. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;