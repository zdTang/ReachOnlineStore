const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-orange-500 pb-4 mb-4">
      <div>
        <h2 className="mb-2 text-gray-800">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-orange-500">{price}</span>
          <span className="amount font-bold border border-gray-300 px-3 py-1 rounded-md text-gray-800">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <button
          className="font-inherit font-bold text-lg text-orange-500 border border-orange-500 w-12 text-center rounded-md bg-transparent hover:bg-orange-500 hover:text-white focus:outline-none"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="font-inherit font-bold text-lg text-orange-500 border border-orange-500 w-12 text-center rounded-md bg-transparent hover:bg-orange-500 hover:text-white focus:outline-none ml-2 sm:ml-4"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
