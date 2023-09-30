import React from 'react';
import { Modal as FlowbiteModal } from 'flowbite-react';

type ModalProps = {
  name?: string; // モーダル名 指定なしの場合'modal'となる
  openModal?: (string | undefined) | boolean; // モーダル表示状態のuseState
  setOpenModal?: React.Dispatch<React.SetStateAction<string | undefined>>; // モーダル表示状態のuseState
  setOpenModalBoolean?: React.Dispatch<React.SetStateAction<boolean>>; // モーダル表示状態のuseState
  children: React.ReactNode; // モーダルのボディの表示内容
  header?: React.ReactNode | string | boolean; // モーダルのヘッダの表示内容
  headerClassName?: string | undefined;
  bodyClassName?: string | undefined;
  footer?: React.ReactNode; // モーダルのフッターの表示内容
  footerClassName?: string | undefined;
  size?: // モーダルの表示サイズ
  'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  staticModal?: boolean; // モーダル外を押下された場合、モーダルを閉じるか否か。
  overlay?: boolean; // モーダルの背景をグレーアウトするか否か。複数のモーダルを表示させる場合に使用。
  show?: boolean; // 常に表示状態にする (モーダル外でモーダル表示制御を行いたい場合に使用) ヘッダの閉じる(×)は動作しなくなるので注意
};

export const Modal = ({
  name = 'modal',
  openModal,
  setOpenModal,
  setOpenModalBoolean,
  children,
  header,
  headerClassName,
  bodyClassName,
  footer,
  footerClassName,
  size = '2xl',
  staticModal = false,
  overlay = true,
  show,
}: ModalProps) => {
  return (
    <FlowbiteModal
      className={`${
        // モーダルの背景のグレーアウト
        overlay
          ? 'bg-opacity-50 dark:bg-opacity-80'
          : 'bg-opacity-0 dark:bg-opacity-0'
      }`}
      show={show ?? (openModal === name || openModal === true)}
      size={size}
      dismissible={!staticModal}
      onClose={() => {
        if (setOpenModal) {
          setOpenModal(undefined);
        } else if (setOpenModalBoolean) {
          setOpenModalBoolean(false);
        }
      }}
    >
      {header && (
        <FlowbiteModal.Header className={headerClassName}>
          {header}
        </FlowbiteModal.Header>
      )}
      <FlowbiteModal.Body className={bodyClassName}>
        <div className="space-y-6">{children}</div>
      </FlowbiteModal.Body>
      {footer && (
        <FlowbiteModal.Footer className={footerClassName}>
          {footer}
        </FlowbiteModal.Footer>
      )}
    </FlowbiteModal>
  );
};

/**
 * フッターの実装例:
    const footer: JSX.Elements = (
      <Button onClick={() => setOpenModal(undefined)}>I accept</Button>
      <Button color="gray" onClick={() => setOpenModal(undefined)}>
        Decline
      </Button>
    );
 */
