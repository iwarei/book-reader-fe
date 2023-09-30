import React from 'react';
import { RadioButton } from '../atoms/RadioButton';
import { Label } from '../atoms/Label';

type RadioButtonWithLabelProps = {
  value?: string;
  radioButtonId?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  labelText: string;
  labelClass?: string[];
  labelId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButtonWithLabel = ({
  value,
  radioButtonId,
  name,
  checked = false,
  disabled = false,
  labelText,
  labelClass,
  labelId,
  onChange,
}: RadioButtonWithLabelProps) => {
  return (
    <div className="mb-2">
      <RadioButton
        id={radioButtonId ?? name}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Label
        text={labelText}
        className={
          labelClass !== undefined
            ? [...labelClass, 'ml-2 mt-1']
            : ['ml-2 mt-1']
        }
        htmlFor={radioButtonId ?? name}
        id={labelId ?? undefined}
      />
    </div>
  );
};
