import { EventList } from '../types/types'

export const mockData: EventList[] = [
  {
    id: 0,
    activeElement: 3,
    type: 'музыка',
    events: [
      {
        year: 1980,
        event: 'Нью-Йорке состоялась прощальная вечеринка в честь закрытия диско-клуба «Студия 54»',
      },
      {
        year: 1981,
        event: '1 августа начал вещание музыкальный канал MTV',
      },
      {
        year: 1982,
        event: 'Образовалась группа кино',
      },
      {
        year: 1983,
        event:
          'На MTV состоялся премьерный показ четырнадцатиминутного экстравагантного клипа Майкла Джексона «Thriller».',
      },
      {
        year: 1984,
        event: 'В Лондоне состоялась премьера рок-мюзикла Эндрю Ллойд Уэббера «Звёздный Экспресс».',
      },
      {
        year: 1985,
        event: 'Образовалась группа Ария',
      },
      {
        year: 1986,
        event: 'Майкл Джексон выкупил авторские права на большинство песен «The Beatles» за 47 миллионов долларов',
      },
    ],
  },
  {
    id: 1,
    type: 'кино',
    events: [
      {
        year: 1987,
        event: '«Хищник»/Predator, США (реж. Джон Мактирнан)',
      },
      {
        year: 1988,
        event: '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)',
      },
      {
        year: 1989,
        event: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
      },
      {
        year: 1990,
        event: '«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин)',
      },
      {
        year: 1991,
        event: '«Семейка Аддамс/The Addams Family, США, (реж. Барри Зонненфельд)',
      },
    ],
  },

  {
    type: 'литература',
    id: 2,
    events: [
      {
        year: 1992,
        event:
          'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах»',
      },
      {
        year: 1994,
        event: '«Бессонница» — роман Стивена Кинга',
      },
      {
        year: 1995,
        event: 'Нобелевская премия по литературе — Шеймас Хини, «За лирическую красоту и этическую глубину поэзии...»',
      },
      {
        year: 1997,
        event: '«Гарри Поттер и философский камень» — роман Джоан Роулинг',
      },
    ],
  },
  {
    type: 'искусство',
    id: 3,
    events: [
      {
        year: 1999,
        event: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
      },
      {
        year: 2000,
        event: 'Возобновлено издание журнала «Театр»',
      },
      {
        year: 2003,
        event:
          'В Венеции после восьмилетней реставрации постановкой оперы Джузеппе Верди «Травиата» открылся театр «Ла Фениче», пострадавший в пожаре 1996 года',
      },
      {
        year: 2004,
        event:
          '2 октября в Московском драматическом театре им. А. С. Пушкина поставлен спектакль «Кот в сапогах» Ш.Перро',
      },
    ],
  },
  {
    id: 4,
    type: 'биология',
    events: [
      {
        year: 1590,
        event: 'Изобретение первого микроскопа Янсена З.',
      },
      {
        year: 1680,
        event: 'Открытие Левингука. Открытие одноклеточных организмов и эритроцитов А. ван Левингуком',
      },
      {
        year: 1855,
        event:
          'Уточнение клеточной теории Р. Вихоровым. В 1855 г., немецким врачом Р. Вирховым была изменена клеточная теория – «клетка образуется из клетки путём деления» (до этого утверждалось, что клетки образуются из неклеточного вещества).',
      },
      {
        year: 1931,
        event: 'Создание электронного микроскопа Э. Руске, М. Кноль',
      },
      {
        year: 2009,
        event: 'Широкое применение электронного микроскопа',
      },
      {
        year: 2010,
        event: 'Первая синтетическая бактериальная клетка (Крейг Вентер J. Craig Venter Institute)',
      },
    ],
  },
  {
    id: 5,
    type: 'наука',
    events: [
      {
        year: 2015,
        event: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        event:
          'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2017,
        event: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2018,
        event: 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца',
      },
      {
        year: 2019,
        event: 'Google объявил о создании 53-кубитного квантового компьютера',
      },
      {
        year: 2020,
        event: 'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта',
      },
    ],
  },
]
