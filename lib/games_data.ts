export interface Game {
    id: string
    name: string
    shortDescription: string
    description: string
    thumbnail: string
    rules: string[]
    playLink?: string
    link: string
}

export const games: Game[] = [
    {
        id: 'maele',
        name: 'Maele a Setswana',
        shortDescription: 'An educational game to learn Setswana Idioms',
        description: '',
        thumbnail:
            'https://englishclassviaskype.com/wp-content/uploads/2023/05/An-Introduction-to-Idioms-and-Expressions.jpg',
        rules: [
            'Players take turns placing pieces on intersections',
            "Three pieces in a row forms a 'mill'",
            "When a mill is formed, remove one opponent's piece",
            'Win by reducing opponent to two pieces or blocking all moves',
        ],
        link: '/games/maele',
    },
]
