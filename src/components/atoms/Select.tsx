import React from 'react';

type SelectProps = {
  id?: string | undefined;
  name: string;
  value: string[] | number[];
  selected?: boolean[] | undefined;
  text: string[] | number[];
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const Select = ({
  id,
  name,
  value,
  selected,
  text,
  disabled = false,
  onChange,
}: SelectProps) => {
  return (
    <select
      id={id ?? name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      disabled={disabled}
      onChange={onChange}
    >
      {value.map((v, i) => (
        <option value={v} selected={selected ? selected[i] : undefined}>
          {text[i]}
        </option>
      ))}
    </select>
  );
};
