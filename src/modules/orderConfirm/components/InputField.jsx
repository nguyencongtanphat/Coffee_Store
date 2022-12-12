import React from 'react'

export default function InputField({ label, type, holder, value, isDisabled, forwardedRef }) {
 
  return (
    <div className="p-2 md:m-3">
      <label
        for="name"
        class="block mb-1.5 text-sm font-Lexend text-black text-b14 md:text-b10 md:text-bold "
      >
        {label}
      </label>
      <input
        ref={forwardedRef}
        type={type}
        id="first_name"
        class="bg-white border-spacing-0.5 border-solid border-grey300 text-b16 text-[#6C6A6A] rounded-lg focus:ring-orange focus:border-orange block w-11/12 p-3 mt-0.5 md:text-b11 md:w-full md:p-4"
        placeholder={value}
        disabled={isDisabled}
        required
      />
    </div>
  );
}
