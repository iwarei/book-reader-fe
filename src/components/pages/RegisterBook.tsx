import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { PageTemplate } from '../templates/PageTemplate';
import { Table, TableProps, HeaderProps, RowProps } from '../organisms/Table';
import { PrimaryButton } from '../atoms/Button';

export const RegisterBook = () => {
  // 書籍一覧取得時の各書籍取得時用の型
  type BookResultType = {
    id: number;
    author_id: number;
    title: string;
    detail: string;
  };

  const tableHeader: HeaderProps[] = [
    { text: '#' },
    { text: '書籍名' },
    { text: '作者' },
  ];

  const tableRow: RowProps[] = [];

  const initialTableState: TableProps = {
    headerProps: tableHeader,
    rowProps: tableRow,
  };

  const [tableState, setTableState] = useState<TableProps>(initialTableState);

  useLayoutEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/book`)
      .then((res) => {
        console.log(res);

        const tableRows: RowProps[] = [];
        res?.data?.books?.forEach((book: BookResultType) => {
          console.log(book);
          tableRows.push({
            cellProps: [
              { text: book.id.toString() },
              { text: book.title },
              { text: book.author_id.toString() },
            ],
          });
        });

        setTableState((prevState) => ({ ...prevState, rowProps: tableRows }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageTemplate headerText="書籍管理">
      <div className="text-right">
        <PrimaryButton text="新規登録" />
      </div>
      <Table {...tableState} />
    </PageTemplate>
  );
};
