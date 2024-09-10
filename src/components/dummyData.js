export default dummyData = {
    recipes: [
        {
            name: 'placeholder 1',
            ingredients: [
                {name: 'onion', amount: 0.5},
                {name: 'garlic', amount: 1},
                {name: 'ground beef', amount: 1},
                {name: 'rosemary', amount: 1},
                {name: 'beef bouillion', amount: 1},
                {name: 'water', amount: 3}
            ],
            instructions: 'do things, preheat, cook for a while, mix ingredients, etc'
        },
        {
            name: 'placeholder 2',
            ingredients: [
                {name: 'onion', amount: 0.5},
                {name: 'garlic', amount: 1},
                {name: 'ground beef', amount: 1},
                {name: 'rosemary', amount: 1},
                {name: 'beef bouillion', amount: 1},
                {name: 'water', amount: 3}
            ],
            instructions: 'unique instructions'
        },
        {
            name: 'placeholder 3',
            ingredients: [
                {name: 'onion', amount: 0.5},
                {name: 'garlic', amount: 1},
                {name: 'ground beef', amount: 1},
                {name: 'rosemary', amount: 1},
                {name: 'beef bouillion', amount: 1},
                {name: 'water', amount: 3}
            ],
            instructions: 'lorem ipsum'
        },
    ],
    cookbooks: [
        {name: 'Family Recipes', recipes: [dummyData.recipes[0], 'placeholder 2', 'placeholder 3']},
        {name: 'College Cookbook', recipes: ['placeholder 2', 'placeholder 3', 'placeholder 1']},
        {name: 'Julia Child, ftw', recipes: ['placeholder 3', 'placeholder 1', 'placeholder 2']},
    ],
    events: [
        {name: 'Birthday Party', recipes: [dummyData.recipes[2], dummyData.recipes[1]], date: '2024-11-23', guests: ['mom', 'dad', 'martha', 'joey', 'steve', 'bertha', 'wanda']},
        {name: 'Halloween Party', recipes: [dummyData.recipes[0], dummyData.recipes[1]], date: '2024-10-31', guests: ['mom', 'dad', 'martha', 'joey', 'steve', 'bertha', 'wanda', 'dracula', 'frankenstein']}
    ]
}