import React, { useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ info, onChangeInfo, isEmpty }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Name",
      placeholder: "e.g John Doe",
    },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      placeholder: "e.g john@gmail.com",
    },
    {
      id: 3,
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
    },
  ]);

  return (
    <div>
      <SectionHeading
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form className="flex flex-col space-y-6 text-[14px]">
        {formFields.map((formField) => (
          <FormField
            onChange={onChangeInfo}
            key={formField.id}
            name={formField.name}
            label={formField.label}
            placeholder={formField.placeholder}
            value={info[formField.name]}
            isEmpty={isEmpty}
          />
        ))}
      </form>
    </div>
  );
};

export default YourInfo;
