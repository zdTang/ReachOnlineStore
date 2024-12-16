const Card = (props) => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">{props.children}</div>
  );
};

export default Card;
