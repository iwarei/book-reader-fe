import React, { useContext, useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IsAuthedContext } from '../../context/AuthProvider';
import { useAuth } from '../../hooks/useAuth';

type NavbarProps = {
  showButton?: boolean;
};

type NavbarLinkProps = {
  link?: string;
  text: string;
  onClick?: () => void;
};

const PageTitleAndLogo = () => {
  return (
    <>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 mr-3"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Flowbite
      </span>
    </>
  );
};

const NavbarLink = ({ link, text, onClick }: NavbarLinkProps) => {
  const navigate = useNavigate();
  const { isAuthed } = useContext(IsAuthedContext)!;

  return !isAuthed ? (
    <li>
      <a
        href={link}
        className="block w-full py-2 pl-3 pr-4 text-start text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {text}
      </a>
    </li>
  ) : (
    <li>
      <button
        type="button"
        className="block w-full py-2 pl-3 pr-4 text-start text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        onClick={() => {
          if (onClick) {
            onClick();
          }
          if (link) {
            navigate(link);
          }
        }}
      >
        {text}
      </button>
    </li>
  );
};

export const Navbar = ({ showButton = true }: NavbarProps) => {
  const navigate = useNavigate();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [width, setWidth] = useState<undefined | number>(undefined);

  const { isAuthed } = useContext(IsAuthedContext)!;
  const { logout } = useAuth();

  // ナビバー左サイドのロゴ・リンク押下時のイベントハンドラ
  const titleButtonHandler = () => {
    navigate('/');
  };

  // ログアウトボタン押下時のイベントハンドラ
  const logoutButtonHandler = async () => {
    await logout({});
  };

  // 画面幅の変更を検知
  useLayoutEffect(() => {
    const updateWidth = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // 画面幅が768px以上になった際、ナビバーを閉じる
  useEffect(() => {
    if (isNavbarOpen && width && width >= 768) {
      setIsNavbarOpen(false);
    }
  }, [width]);

  return (
    <nav className="border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* ナビバーの左サイドのロゴ・リンク */}
        {!isAuthed ? (
          // 未認証時はaタグでリンクを貼る
          <a href="/" className="flex items-center">
            <PageTitleAndLogo />
          </a>
        ) : (
          // 認証時はnavigateでリンクさせる
          <button
            type="button"
            className="flex items-center"
            onClick={titleButtonHandler}
          >
            <PageTitleAndLogo />
          </button>
        )}
        {/* ナビバーの右サイドのボタン・リンク */}
        {showButton && (
          <>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div
              className={
                isNavbarOpen
                  ? `w-full md:block md:w-auto`
                  : `hidden w-full md:block md:w-auto`
              }
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                {/* 認証状況によりボタン・リンクを出し分けする */}
                {!isAuthed ? (
                  //  未認証時のボタン・リンク
                  <NavbarLink link="/login" text="ログイン" />
                ) : (
                  // 認証時のボタン・リンク
                  <>
                    {/* アカウント情報編集リンク */}
                    <NavbarLink text="アカウント" link="/account" />
                    {/* ログアウトボタン */}
                    <NavbarLink
                      text="ログアウト"
                      onClick={logoutButtonHandler}
                    />
                  </>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
