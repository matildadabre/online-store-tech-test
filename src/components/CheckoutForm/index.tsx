import CheckoutFormRow from "@/components/CheckoutForm/CheckoutFormRow";
import type { ErrorsType } from "@/hooks/useOrderFormHandler";

type inputFieldListType = {
  labelText: string;
  name: string;
};

type FormProps = {
  errors: ErrorsType;
};

const personalInputList: inputFieldListType[] = [
  { labelText: "Email", name: "email" },
  { labelText: "Name", name: "fullName" },
  { labelText: "Address", name: "address" },
];

const paymentInputList: inputFieldListType[] = [
  { labelText: "Card number", name: "cardNumber" },
  { labelText: "Name", name: "cardHolderName" },
  { labelText: "Expiry (MM/YY)", name: "expiryDate" },
  { labelText: "CVC", name: "cvc" },
];

const renderFormRows = (
  inputList: inputFieldListType[],
  errors: ErrorsType
) => {
  return inputList.map((input) => (
    <CheckoutFormRow
      key={input.name}
      label={input.labelText}
      name={input.name}
      error={errors?.[input.name as keyof ErrorsType]}
    />
  ));
};

const CheckoutForm = ({ errors }: FormProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Section title="Shipping Information">
        {renderFormRows(personalInputList, errors)}
      </Section>
      <Section title="Payment">
        {renderFormRows(paymentInputList.slice(0, -2), errors)}
        <div className="flex space-x-4">
          {paymentInputList.slice(-2).map((input, index) => (
            <CheckoutFormRow
              key={input.name}
              label={input.labelText}
              name={input.name}
              error={errors?.[input.name as keyof ErrorsType]}
              className={index === 0 ? "flex-1" : "w-[70px]"}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-5 pb-[30px] border-b border-[#E5E7EB]">
    <h3 className="font-medium text-black text-base font-medium leading-5">
      {title}
    </h3>
    {children}
  </div>
);

export default CheckoutForm;
