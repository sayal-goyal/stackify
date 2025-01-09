import React, { useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const Address = ({ address, onChangeAddress, isEmpty }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "address",
      label: "Address",
      placeholder: "e.g Victoria Street",
    },
    {
      id: 2,
      name: "country",
      label: "Country",
      placeholder: "e.g USA",
    },
    {
      id: 3,
      name: "state",
      label: "State",
      placeholder: "e.g California",
    },
  ]);

  return (
    <div>
      <SectionHeading
        title="Address Info"
        desc="Please provide your Address, country, state, city and pincode."
      />
      <form className="flex flex-col space-y-6 text-[14px]">
        {formFields.map((formField) => (
          <FormField
            onChange={onChangeAddress}
            key={formField.id}
            name={formField.name}
            label={formField.label}
            placeholder={formField.placeholder}
            value={address[formField.name]}
            isEmpty={isEmpty}
          />
        ))}
      </form>
    </div>
  );
};

export default Address;