type FormRowProps = {
  label: string;
  name: string;
  error: string | undefined;
  className?: string;
};

const CheckoutFormRow = ({ label, name, error, className }: FormRowProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={name} className="color-[#374151] leading-[17px]">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="w-full border border-[#D1D5DB] rounded-[10px] p-2 shadow-[0px_1px_2px_0px_#00000040]"
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default CheckoutFormRow;
