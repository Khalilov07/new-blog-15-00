import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'isUser', // имя по которому мы будем оброщаться
    initialState: { // это то с чем мы работаем
        user: {},
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload // здесь мы говорим, у стейта есть какой-то массив, и тебе нужно к этому массив добавить объект
        }, // она принимает текущий стор и инфрмацию об экшкне

        // здесь должен быть набор методов которые должны менять состояние
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer // именно его мы должны подключить в нащ стор
