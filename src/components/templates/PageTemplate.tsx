import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../organisms/Navbar';
import { Alert } from '../atoms/Alert';
import { Heading } from '../atoms/Heading';
import { AlertContext } from '../../context/AlertProvider';
import { Spinner } from '../atoms/Spinner';
import { IsAuthedContext } from '../../context/AuthProvider';
import { useAuth } from '../../hooks/useAuth';

type PageTemplateProps = {
  headerText?: string;
  children: ReactNode;
  showNavbarButton?: boolean;
  enableAutoLogin?: boolean;
  loading?: boolean;
};

export const PageTemplate = ({
  headerText,
  children,
  showNavbarButton = true,
  enableAutoLogin = true,
  loading = false,
}: PageTemplateProps) => {
  const location = useLocation();
  const { alert, setAlert } = useContext(AlertContext)!;
  const { isAuthed } = useContext(IsAuthedContext)!;
  const { autoLogin } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(enableAutoLogin);

  useEffect(() => {
    setAlert(undefined);
  }, [location.pathname]);

  useEffect(() => {
    if (enableAutoLogin && !isAuthed) {
      // ログイン認証済み（セッションが生きている）場合、自動ログインする
      (async () => {
        await autoLogin({});
        setIsLoading(false);
      })();
    }
  }, []);

  // 自動ログイン有効時、APIのレスポンスが返ってくるまで何も表示しない
  if (isLoading && enableAutoLogin && !isAuthed) {
    // return null;
    return (
      <>
        <Navbar showButton={false} />
        <main className="max-w-5xl mx-auto py-4 px-6">
          {/* ロード中のメッセージとスピナーを表示する */}
          <div
            role="status"
            className="fixed justify-center -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 z-20"
          >
            <Spinner />
            <p>Now Loading...</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar showButton={showNavbarButton} />
      <main className="max-w-5xl mx-auto py-4 px-6">
        {/* アラートメッセージを表示 */}
        {(alert?.msg || location.state?.msg) && (
          <Alert
            addClass={['mb-3']}
            color={
              alert?.msg
                ? alert?.color ?? 'success'
                : location.state?.color ?? 'success'
            }
            message={alert?.msg ?? location.state?.msg}
          />
        )}
        {/* ヘッダ用テキスト */}
        {headerText && <Heading.H3 text={headerText} />}
        {/* 画面要素 */}
        {children}
        {/* ロード中 画面を暗くしスピナーを表示する */}
        {loading && (
          <>
            <div
              role="status"
              className="fixed -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 z-[1000]"
            >
              <Spinner />
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 visible z-[999]" />
          </>
        )}
      </main>
    </>
  );
};
