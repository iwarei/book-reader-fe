import React, { useState, ChangeEvent } from 'react';
import { PrimaryButton } from '../atoms/Button';
import { InputFormWithLabel } from '../molecules/InputFormWithLabel';
import { PageTemplate } from '../templates/PageTemplate';
import { useAuth, SendResetMailReqType } from '../../hooks/useAuth';

export const ForgotPassword = () => {
  const initialReqData: SendResetMailReqType = {
    email: '',
  };

  const [reqData, setReqData] = useState<SendResetMailReqType>(initialReqData);
  const { sendResetMail } = useAuth();

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReqData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetEventHandler = async () => {
    await sendResetMail({ reqData });
  };

  return (
    <PageTemplate headerText="パスワードリセット" showNavbarButton={false}>
      <InputFormWithLabel
        labelText="メールアドレス"
        formName="email"
        autocomplete="email"
        onChange={inputChangeHandler}
      />
      <div className="flex justify-center">
        <PrimaryButton
          type="button"
          text="確認用メールを送信"
          id="reset-button"
          addClass={['w-48']}
          onClick={resetEventHandler}
        />
      </div>
    </PageTemplate>
  );
};
