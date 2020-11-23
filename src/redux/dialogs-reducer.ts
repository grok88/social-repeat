import {DialogType, MessageType} from "../components/dialogs/Dialogs";

type AddMessageACType = ReturnType<typeof addMessageAC>;
type UpdateMessageACType = ReturnType<typeof updateMessageAC>;
export type DialogsActionsType = AddMessageACType | UpdateMessageACType

type DialogsStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessText: string
}

export const dialogsReducer = (state: DialogsStateType, action: DialogsActionsType): DialogsStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMess = {
                id: state.messages.length + 1,
                message: state.newMessText
            }
            state.messages.push(newMess);
            state.newMessText = '';
            return state;
        case 'UPDATE-MESSAGE':
            // @ts-ignore
            state.newMessText = action.value;
            return state;
        default:
            return state;
    }
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const;
}
export const updateMessageAC = (value: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        value
    } as const;
}
