import React from 'react';
import { InputFile } from '../atoms/Input';
import { Label } from '../atoms/Label';

type InputFileWithLabelProps = {
  formId?: string;
  formName: string;
  disabled?: boolean;
  labelText: string;
  labelClass?: string[];
  labelId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputFileWithLabel = ({
  formId,
  formName,
  disabled,
  labelText,
  labelClass,
  labelId,
  onChange,
}: InputFileWithLabelProps) => {
  return (
    <div className="mb-4">
      <Label
        text={labelText}
        className={labelClass}
        htmlFor={formId ?? formName}
        id={labelId ?? ''}
      />
      <InputFile
        id={formId ?? formName}
        name={formName}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};
