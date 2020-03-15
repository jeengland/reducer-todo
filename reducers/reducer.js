const initialState = [
    {
        item: 'Build a simple reducer and initial state',
        completed: false,
        id: 3892987589,
    },
    {
        item: 'Set up state in your component',
        completed: false,
        id: 3892987590,
    },
    {
        item: 'Adding todos',
        completed: false,
        id: 3892987591,
    },
    {
        item: 'Toggle the completed field',
        completed: false,
        id: 3892987592,
    },
    {
        item: 'Clearing completed todos',
        completed: false,
        id: 3892987593,
    },
    {
        item: 'Stretch problems',
        completed: false,
        id: 3892987594,
    }
]

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, { item: action.item, completed: false, id: action.id}];
        default:
            return state;
    }
}

export { initialState, reducer };