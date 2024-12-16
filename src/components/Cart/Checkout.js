import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `mb-2 flex justify-between items-center ${
    formInputsValidity.name ? "" : "border-red-500 bg-red-50"
  }`;
  const streetControlClasses = `mb-2 flex justify-between items-center ${
    formInputsValidity.street ? "" : "border-red-500 bg-red-50"
  }`;
  const postalCodeControlClasses = `mb-2 flex justify-between items-center ${
    formInputsValidity.postalCode ? "" : "border-red-500 bg-red-50"
  }`;
  const cityControlClasses = `mb-2 flex justify-between items-center ${
    formInputsValidity.city ? "" : "border-red-500 bg-red-50"
  }`;

  return (
    <form className="my-4 h-76 overflow-auto" onSubmit={confirmHandler}>
      <div>
        <div className={nameControlClasses}>
          <label htmlFor="name" className="font-bold mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            className="w-80 max-w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>
        {!formInputsValidity.name && (
          <p className="text-red-500">Please enter a valid name!</p>
        )}
      </div>

      <div>
        <div className={streetControlClasses}>
          <label htmlFor="street" className="font-bold mb-1">
            Street
          </label>
          <input
            type="text"
            id="street"
            ref={streetInputRef}
            className="w-80 max-w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>
        {!formInputsValidity.street && (
          <p className="text-red-500">Please enter a valid street!</p>
        )}
      </div>

      <div>
        <div className={postalCodeControlClasses}>
          <label htmlFor="postal" className="font-bold mb-1">
            Postal Code
          </label>
          <input
            type="text"
            id="postal"
            ref={postalCodeInputRef}
            className="w-80 max-w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>
        {!formInputsValidity.postalCode && (
          <p className="text-red-500">
            Please enter a valid postal code (5 characters long)!
          </p>
        )}
      </div>

      <div>
        <div className={cityControlClasses}>
          <label htmlFor="city" className="font-bold mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            ref={cityInputRef}
            className="w-80 max-w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>
        {!formInputsValidity.city && (
          <p className="text-red-500">Please enter a valid city!</p>
        )}
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={props.onCancel}
          className="cursor-pointer text-red-700 hover:bg-red-100 px-4 py-2 rounded-full"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-2 rounded-full font-bold text-white bg-red-700 hover:bg-red-800"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
