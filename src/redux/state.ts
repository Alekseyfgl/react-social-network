export const state = {
    profilePage: {
        posts: {
            author: {
                name: 'Alex Sims',
                img: 'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
            },
            post: [
                {
                    id: +new Date(),
                    date: '7 January 11:40',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam!',
                    img: 'https://pen-online.com/fr/wp-content/uploads/2018/08/02092152/1-DSC_3189_02-1024x683.jpg',
                },
                {
                    id: +new Date(),
                    date: '21 January 11:40',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima!',
                    img: null,
                },
                {
                    id: +new Date(),
                    date: '14 January 11:40',
                    text: 'Lorem ipsum dolor sit amet',
                    img: 'https://www.bemytravelmuse.com/wp-content/uploads/2022/04/beautiful-places-in-africa-683x1024.jpg',
                },
            ],
        },
    },
    messagesPage: {
        dialogs: [
            { id: 1, user: 'Alex' },
            { id: 2, user: 'Dima' },
            { id: 3, user: 'Adam' },
        ],
    },
};
