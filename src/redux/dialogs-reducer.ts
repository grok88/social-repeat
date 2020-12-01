type AddMessageACType = ReturnType<typeof addMessageAC>;
export type DialogsActionsType = AddMessageACType;

export type DialogsStateType = typeof initialState;
//     {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessText: string
// }
const initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Tanya'},
    ],

    messages: [
        {id: 1, message: 'This is Sparta!'},
        {id: 2, message: 'I likes WoW'},
        {id: 3, message: 'I want to see a mountain'},
    ],
    newMessText: ''
}
export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionsType): DialogsStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMess = {
                id: state.messages.length + 1,
                message: action.newMess
            }
            return {
                ...state,
                messages: [...state.messages.map(m => ({...m})), newMess]
            }
        default:
            return state;
    }
}

export const addMessageAC = (newMess: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMess
    } as const;
}
