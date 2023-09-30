import React, { useState, ChangeEvent } from 'react';
import { PrimaryButton } from '../atoms/Button';
import { Link } from '../atoms/Link';
import { InputFormWithLabel } from '../molecules/InputFormWithLabel';
import { PageTemplate } from '../templates/PageTemplate';
import { useAuth, LoginReqType } from '../../hooks/useAuth';

export const Login = () => {
  const initialReqData: LoginReqType = {
    email: '',
    password: '',
  };
  const [reqData, setReqData] = useState<LoginReqType>(initialReqData);
  const { login } = useAuth();

  // フォーム入力値変化時のイベントハンドラ
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReqData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ログインボタン押下時のイベントハンドラ
  const loginEventHandler = async () => {
    await login({ reqData });
  };

  return (
    <PageTemplate headerText="ログイン" showNavbarButton={false}>
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
        autocomplete="current-password"
        onChange={inputChangeHandler}
      />
      <div className="flex justify-center place-items-center relative">
        <PrimaryButton
          type="button"
          text="ログイン"
          id="login-button"
          addClass={['w-32']}
          onClick={loginEventHandler}
        />
        <Link
          text="パスワードを忘れた場合"
          href="/forgot-password"
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
