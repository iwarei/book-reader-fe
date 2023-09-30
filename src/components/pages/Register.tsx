import React, { useState, ChangeEvent } from 'react';
import { Link } from '../atoms/Link';
import { PrimaryButton } from '../atoms/Button';
import { InputFormWithLabel } from '../molecules/InputFormWithLabel';
import { PageTemplate } from '../templates/PageTemplate';
import { RegisterReqType, useAuth } from '../../hooks/useAuth';

export const Register = () => {
  const initialReqData: RegisterReqType = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const [reqData, setReqData] = useState<RegisterReqType>(initialReqData);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReqData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { register } = useAuth();
  const registerEventHandler = async () => {
    await register({ reqData });
  };

  return (
    <PageTemplate headerText="ユーザー登録" showNavbarButton={false}>
      <InputFormWithLabel
        labelText="名前"
        formName="name"
        autocomplete="name"
        onChange={inputChangeHandler}
      />
      <InputFormWithLabel
        labelText="メールアドレス"
        formName="email"
        autocomplete="email"
        onChange={inputChangeHandler}
      />
      <InputFormWithLabel
        labelText="パスワード"
        formName="password"
        type="password"
        autocomplete="new-password"
        onChange={inputChangeHandler}
      />
      <InputFormWithLabel
        labelText="パスワード (確認用)"
        formName="password_confirmation"
        type="password"
        autocomplete="new-password"
        onChange={inputChangeHandler}
      />

      <div className="flex justify-center place-items-center relative">
        <PrimaryButton
          type="button"
          text="登録"
          id="register-button"
          addClass={['w-32']}
          onClick={registerEventHandler}
        />
        <Link
          text="ログイン画面へ"
          href="/login"
          addClass={[
            'absolute',
            'right-0',
            'break-words',
            'max-w-[96px]',
            'text-sm',
            'sm:mx-0',
            'md:mx-2',
            'md:text-base',
            'md:max-w-max',
          ]}
        />
      </div>
    </PageTemplate>
  );
};
