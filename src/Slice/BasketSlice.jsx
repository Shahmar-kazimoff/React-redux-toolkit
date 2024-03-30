import { createSlice } from "@reduxjs/toolkit";

const basket = JSON.parse(localStorage.getItem("basket")) || []
export const BasketSlice = createSlice({
    name: "basket",
    initialState: {
        initialBasket: basket,
        total: basket.reduce((totals, item) => totals += item.price * item.count, 0)
    },
    reducers: {
        addBasket(state, action) {
            const existedIndex = state.initialBasket.findIndex(item => item.id === action.payload.id)
            existedIndex > -1 ? state.initialBasket[existedIndex].count += 1 : state.initialBasket.push(action.payload)
            state.total += action.payload.price
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        },
        removeBasket(state, action) {
            state.initialBasket = state.initialBasket.filter(item => item.id !== action.payload)
            state.total = state.initialBasket.reduce((totals, item) => totals += item.price * item.count, 0)
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        },
        increaseItem(state, action) {
            const existedIndex = state.initialBasket.findIndex(item => item.id === action.payload.id)
            state.initialBasket[existedIndex].count += 1
            state.total = state.initialBasket.reduce((totals, item) => totals += item.price * item.count, 0)
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        },
        decreaseItem(state, action) {
            const existedIndex = state.initialBasket.findIndex(item => item.id === action.payload.id)
            if (state.initialBasket[existedIndex].count > 1) {
                state.initialBasket[existedIndex].count -= 1
            }
            state.total = state.initialBasket.reduce((totals, item) => totals += item.price * item.count, 0)
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        },
        removeBasketAll(state, action) {
            state.initialBasket = []
            state.total = 0
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        }
    }
})
export const { addBasket, removeBasket, increaseItem, decreaseItem, removeBasketAll } = BasketSlice.actions
export default BasketSlice.reducer
