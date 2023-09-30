import React, { useState, ChangeEvent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PrimaryButton } from '../atoms/Button';
import { InputFormWithLabel } from '../molecules/InputFormWithLabel';
import { PageTemplate } from '../templates/PageTemplate';
import { ResetPasswordReqType, useAuth } from '../../hooks/useAuth';

export const ResetPassword = () => {
  const initialReqData: ResetPasswordReqType = {
    email: '',
    password: '',
    password_confirmation: '',
    token: '',
  };
  const [reqData, setReqData] = useState<ResetPasswordReqType>(initialReqData);
  const { resetPassword } = useAuth();

  const location = useLocation();
  const token = location.pathname.split('/')[2];
  const email = location.search.split('=')[1];

  useEffect(() => {
    setReqData((prevData) => ({
      ...prevData,
      email,
      token,
    }));
  }, []);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReqData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetEventHandler = async () => {
    await resetPassword({ reqData });
  };

  return (
    <PageTemplate headerText="パスワードリセット" showNavbarButton={false}>
      <InputFormWithLabel
        labelText="メールアドレス"
        formName="email"
        onChange={inputChangeHandler}
        value={email}
        autocomplete="email"
        disabled
      />
      <InputFormWithLabel
        labelText="新しいパスワード"
        formName="password"
        type="password"
        autocomplete="new-password"
        onChange={inputChangeHandler}
      />
      <InputFormWithLabel
        labelText="新しいパスワード (確認用)"
        formName="password_confirmation"
        type="password"
        autocomplete="new-password"
        onChange={inputChangeHandler}
      />

      <div className="flex justify-center">
        <PrimaryButton
          type="button"
          text="リセット"
          id="reset-button"
          addClass={['w-32']}
          onClick={resetEventHandler}
        />
      </div>
    </PageTemplate>
  );
};
