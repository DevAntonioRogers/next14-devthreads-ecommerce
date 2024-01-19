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
          className={clsx(``)}
        />
      </div>
    </div>
  );
};
