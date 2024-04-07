type BuildProps = {
    image: string,
    alt: string,
    description: string,
    price: string
}

export const buildList: BuildProps[] = [
    {
        image: './materials/stone1.jpg',
        alt: 'stone1',
        description: 'Кирпич рядовой полнотелый',
        price: "От 15 руб/шт"
    },
    {
        image: './materials/stone4.jpg',
        alt: 'stone4',
        description: 'Газосиликатный блок',
        price: "От 5500 руб/м3"
    },
    {
        image: './materials/stone6.jpg',
        alt: 'stone6',
        description: 'Керамический блок',
        price: "От 130 руб/шт"
    },
    {
        image: './materials/stone5.jpeg',
        alt: 'stone5',
        description: 'Блок керамзитобетонный',
        price: "От 65 руб/шт"
    },
    {
        image: './materials/stone3.jpg',
        alt: 'stone3',
        description: 'Кирпич облицовочный',
        price: "От 30 руб/шт"
    },
    {
        image: './materials/siding1.jpg',
        alt: 'siding1',
        description: 'Сайдинг фиброцементный',
        price: "От 800 руб/м2"
    },
    {
        image: './materials/stone2.jpg',
        alt: 'stone2',
        description: 'Фасадная плитка Hauberk',
        price: "От 650 руб/м2"
    },
    {
        image: './materials/wall2.jpg',
        alt: 'wall2',
        description: 'Софит ПВХ',
        price: "Цена по запросу"
    },
    {
        image: './materials/stoke1.jpeg',
        alt: 'stoke1',
        description: 'Водосточная система',
        price: "Цена по запросу"
    },
    {
        image: './materials/roof1.jpg',
        alt: 'roof1',
        description: 'Металлочерепица',
        price: "От 650 руб/м2"
    },
    {
        image: './materials/roof2.png',
        alt: 'roof2',
        description: 'Гибкая черепица',
        price: "От 350 руб/м2"
    },
    {
        image: './materials/floor1.jpg',
        alt: 'floor1',
        description: 'ОСП плита (OSB)',
        price: "От 600 руб/лист"
    },
    {
        image: './materials/warm2.jpg',
        alt: 'warm2',
        description: 'Рулонная наплавляемая гидроизоляция',
        price: "От 90 руб/м2"
    },
    {
        image: './materials/color.jpg',
        alt: 'color',
        description: 'Битумные мастики и праймеры',
        price: "Цена по запросу"
    },
    {
        image: './materials/laminat1.jpg',
        alt: 'laminat',
        description: 'Полимерная гидроизоляционная мембрана',
        price: "От 900 руб/м2"
    },
    {
        image: './materials/warm1.jpg',
        alt: 'warm1',
        description: 'Базальтовая вата',
        price: "Цена по запросу"
    },
    {
        image: './materials/floor2.jpg',
        alt: 'floor2',
        description: 'Экструдированный пенополистирол (XPS)',
        price: "Цена по запросу"
    },
    {
        image: './materials/scale.jpg',
        alt: 'scale',
        description: 'Пароизоляционные мембраны',
        price: "Цена по запросу"
    },
]

export const housesList = [
    {
        id: 0,
        link: "/framehouse",
        title: "Каркасные дома для круглогодичного проживания",
        img: "./images/house4.jpeg",

    },
    {
        id: 1,
        link: "/summerhouse",
        title: "Каркасные дома для летнего проживания",
        img: "./images/house3.jpeg",

    },
    {
        id: 2,
        link: "/stonehouse",
        title: "Дома из кирпича и газобетона",
        img: "./images/house2.jpeg",

    },
    {
        id: 3,
        link: "/summerhouse",
        title: "Каркасные дома для летнего проживания",
        img: "./images/house3.jpeg",

    }

]