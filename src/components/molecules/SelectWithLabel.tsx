import React from 'react';
import { Select } from '../atoms/Select';
import { Label } from '../atoms/Label';

type SelectWithLabelProps = {
  id?: string | undefined;
  name: string;
  optionValue: string[] | number[];
  optionSelected?: boolean[] | undefined;
  optionText: string[] | number[];
  disabled?: boolean;
  labelText: string;
  labelClass?: string[];
  labelId?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectWithLabel = ({
  id,
  name,
  optionValue,
  optionSelected,
  optionText,
  disabled,
  labelText,
  labelClass,
  labelId,
  onChange,
}: SelectWithLabelProps) => {
  return (
    <div className="mb-4">
      <Label
        text={labelText}
        className={labelClass}
        htmlFor={id ?? name}
        id={labelId ?? ''}
      />
      <Select
        id={id ?? name}
        name={name}
        value={optionValue}
        selected={optionSelected}
        text={optionText}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};
