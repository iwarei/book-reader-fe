import React from 'react';
import { CheckBox } from '../atoms/CheckBox';
import { Label } from '../atoms/Label';

type CheckBoxWithLabelProps = {
  value?: string;
  checkBoxId?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  labelText: string;
  labelClass?: string[];
  labelId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBoxWithLabel = ({
  value,
  checkBoxId,
  name,
  checked = false,
  disabled = false,
  labelText,
  labelClass,
  labelId,
  onChange,
}: CheckBoxWithLabelProps) => {
  return (
    <div className="mb-2">
      <CheckBox
        id={checkBoxId ?? name}
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
        htmlFor={checkBoxId ?? name}
        id={labelId ?? undefined}
      />
    </div>
  );
};
