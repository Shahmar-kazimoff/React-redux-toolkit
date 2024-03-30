import { useDispatch, useSelector } from "react-redux"
import { decreaseItem, increaseItem, removeBasket, removeBasketAll } from "../../Slice/BasketSlice"
import { MdDelete } from "react-icons/md";

const Chechkout = () => {
  const dispatch = useDispatch()

  const basket = useSelector(state => state.basket.initialBasket)
  const total = useSelector(state => state.basket.total)
  return (
    <div className="text-center flex flex-col p-14 justify-around">
      {basket && basket.map(product => (
        <div className="flex justify-between items-center border gap-1 my-2" key={product.id}>
          <img className="w-40" src={product.image} />
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-sm text-green-700 font-bold">{product.count}x £{product.price}</p>
          <p className="text-sm text-green-700 font-bold">£{product.price * product.count}</p>
          <div className="flex justify-center items-center gap-1 font-bold">
            <button className="rounded text-2xl" onClick={() => dispatch(increaseItem(product))}>+</button>
            <MdDelete className="text-red-500 text-2xl" onClick={() => { dispatch(removeBasket(product.id)) }} />
            <button className="text-3xl text rounded" onClick={() => dispatch(decreaseItem(product))}>-</button>
          </div>
        </div>
      ))}
      <div className="my-3">
        <p className="my-2 font-semibold text-2xl">Total Price : £{total}</p>
        <button className="bg-red-500 px-2 py-1 rounded text-white font-semibold hover:bg-red-600" onClick={() => dispatch(removeBasketAll())}>Remove All</button>
      </div>
    </div>
  )
}

export default Chechkout