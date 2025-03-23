export const menuItems = [
  {
    key: "/banner/all",
    label: "Банеры",
  },
  {
    key: "Регион",
    label: "Регион",
    children: [
      { label: "История", key: "/region/istoriya" },
      { label: "Культура", key: "/region/kultura" },
      { label: "Природа", key: "/region/priroda" },
      {
        label: "Кухня Рязанского края",
        key: "/region/kuhnya-ryazanskogo-kraya",
      },
      { label: "Архитектура", key: "/region/arhitektura" },
      { label: "События", key: "/region/sobytiya" },
      { label: "Наследие (общee)", key: "/region/nasledie" },
    ],
  },
  {
    key: "Идеи для путешествия",
    label: "Идеи для путешествия",
    children: [
      {
        label: "Что посмотреть?",
        key: "/idei-dlya-puteshestviya/chto-posmotret",
      },
      {
        label: "Чем заняться?",
        key: "/idei-dlya-puteshestviya/chem-zanyatsya",
      },
      { label: "Где поесть?", key: "/idei-dlya-puteshestviya/gde-poest" },
      {
        label: "Где остановиться?",
        key: "/idei-dlya-puteshestviya/gde-ostanovitsya",
      },
      { label: "Сувениры", key: "/idei-dlya-puteshestviya/suveniry" },
      {
        label: "Вечер в городе",
        key: "/idei-dlya-puteshestviya/vecher-v-gorode",
      },
      { label: "Здоровье", key: "/idei-dlya-puteshestviya/zdorove" },
    ],
  },
  {
    key: "Маршруты",
    label: "Маршруты",
    children: [
      {
        label: "Организованные машруты",
        key: "/marshruty/organizovannye-marshruty",
      },
      {
        label: "Гиды",
        key: "/marshruty/gid",
      },
      {
        label: "Самостоятельные машруты",
        key: "/marshruty/samostoyatelnye-marshruty",
      },
    ],
  },
  {
    key: "Туристам",
    label: "Туристам",
    children: [
      { label: "Визит центр для туристов", key: "/ty-s-mestnym/cit" },
      { label: "Новости региона", key: "/ty-s-mestnym/novosti-regiona" },
      { label: "Ответы на вопросы", key: "/ty-s-mestnym/otvety-na-voprosy" },
      { label: "Ваши отзывы", key: "/ty-s-mestnym/obratnaya-svyaz" },
      {
        label: "Мобильное приложение",
        key: "/ty-s-mestnym/mobilnoe-prilozhenie",
      },
    ],
  },
  {
    key: "Профессионалам",
    label: "Профессионалам",
    children: [
      {
        label: "Агентство развития туризма",
        key: "/professionalam/agentstvo-razvitiya-turizma",
      },
      { label: "База знаний", key: "/professionalam/baza-znanij" },
      {
        label: "Реестр туроператоров",
        key: "/professionalam/reestr-turoperatorov",
      },
      { label: "Новости АРТ", key: "/professionalam/novosti-art" },
    ],
  },
  {
    key: "Проекты",
    label: "Проекты",
    children: [
      { label: "Библиотека", key: "/projects/biblioteka" },
      { label: "Промтуризм", key: "/projects/promturizm" },
    ],
  },
  {
    label: "Контакты",
    key: "/kontakty",
  },
];
