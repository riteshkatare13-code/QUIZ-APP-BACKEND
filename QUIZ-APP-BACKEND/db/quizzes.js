const { v4 : uuid } = require('uuid');



const quizzes = [
    {
        id: uuid(),
        category : 'Marvel',
        image: 'https://4kwallpapers.com/images/walls/thumbs_2t/27245.jpg',
        type: 'Marvel STACK',
        description: 'marvel quiz competition',
        quiz: [
            {
                id: uuid(),
                question : 'What is the name of assistant of Tony Stark ? ',
                options:[
                    {id : uuid(), option: 'Natasha Romonoed', isCorrect: false},
                    {id : uuid(), option: 'Charlie Vegan', isCorrect: false},
                    {id : uuid(), option: 'Pepper', isCorrect: true},
                    {id : uuid(), option: 'Steve Rojes', isCorrect: false},
                ]
            },
            {
                id: uuid(),
                question : 'Which Marvel Character Died in Avengers Endgame ?',
                options: [
                    {id : uuid(), option: 'Captain America', isCorrect: false},
                    {id : uuid(), option: 'Hulk', isCorrect: false},
                    {id : uuid(), option: 'Black Panther', isCorrect: false},
                    {id : uuid(), option: 'Iron Man', isCorrect: true},

                ]
            },
            {
                id: uuid(),
                question : 'Which Marvel Character knowingly named as Black Widow ?',
                options: [
                    {id : uuid(), option: 'Steve Rojes', isCorrect: false},
                    {id : uuid(), option: 'Natasha Romonoed', isCorrect: true},
                    {id : uuid(), option: 'Dr. Banner', isCorrect: false},
                    {id : uuid(), option: 'Peter Parker', isCorrect: true},

                ]
            },
            {
                id: uuid(),
                question : 'Black Panther is set in which fictional country ?',
                options: [
                    {id : uuid(), option: 'Wakanda', isCorrect: true},
                    {id : uuid(), option: 'Jakanda', isCorrect: false},
                    {id : uuid(), option:'Takanda', isCorrect: false},
                    {id : uuid(), option: 'Kikanda', isCorrect: false},

                ]
            }
        ]
    },
    {
        id: uuid(),
        category : 'Geography',
        image: 'https://in.pinterest.com/pin/1136877499703319671/',
        type: 'Geography STACK',
        description: 'Geography quiz competition',
        quiz: [
            {
                id: uuid(),
                question : 'India is located in which continent ? ',
                options:[
                    {id : uuid(), option: 'Asia', isCorrect: true},
                    {id : uuid(), option: 'Europe', isCorrect: false},
                    {id : uuid(), option: 'Africa', isCorrect: true},
                    {id : uuid(), option: 'South America', isCorrect: false},
                ]
            },
            {
                id: uuid(),
                question : 'Which is longest river in the world?',
                options: [
                    {id : uuid(), option: 'Amazon River', isCorrect: false},
                    {id : uuid(), option: 'Black Sea', isCorrect: false},
                    {id : uuid(), option: 'Nile River', isCorrect: true},
                    {id : uuid(), option: 'Red Sea', isCorrect: false},

                ]
            },
            {
                id: uuid(),
                question : 'Which of following country is land locked?',
                options: [
                    {id : uuid(), option: 'India', isCorrect: false},
                    {id : uuid(), option: 'Indonesia', isCorrect: true},
                    {id : uuid(), option: 'Sri lanka', isCorrect: false},
                    {id : uuid(), option: 'Brazil', isCorrect: true},

                ]
            },
            {
                id: uuid(),
                question : 'Which country capital is Tehran ?',
                options: [
                    {id : uuid(), option: 'Saudi Arab', isCorrect: false},
                    {id : uuid(), option: 'Iran', isCorrect: true},
                    {id : uuid(), option:'Kuwait', isCorrect: false},
                    {id : uuid(), option: 'Qatar', isCorrect: false},

                ]
            }
        ]
    }
]

module.exports = quizzes;