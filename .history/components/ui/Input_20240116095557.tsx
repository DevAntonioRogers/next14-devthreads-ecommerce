import clsx from "clsx";

const Input = ({ label, id, type, disabled }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          disabled={disabled}
          name={id}
          required
          id={id}
          type={type}
          autoComplete={id}
          className={clsx(
            `block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:`
          )}
        />
      </div>
    </div>
  );
};
