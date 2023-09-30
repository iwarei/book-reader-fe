import React from 'react';

export type HeaderProps = {
  type?: 'text' | 'html' | undefined;
  text?: string;
  textColor?: string | undefined;
  bgColor?: string | undefined;
  className?: string | undefined;
  rowSpan?: number | undefined;
  colSpan?: number | undefined;
  html?: JSX.Element;
};

export type CellProps = {
  type?: 'text' | 'html' | undefined;
  text?: string;
  bold?: boolean;
  textColor?: string | undefined;
  bgColor?: string | undefined;
  className?: string | undefined; // type: textの場合のみ有効。
  rowSpan?: number | undefined;
  colSpan?: number | undefined;
  html?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;
  id?: string | number | undefined;
};

export type RowProps = {
  cellProps: CellProps[];
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  id?: string | number | undefined;
};

export type TableProps = {
  // select?: 'check' | 'radio' | undefined;
  // width?: string;
  // widthFlex?: number[];
  headerProps?: HeaderProps[];
  rowProps?: RowProps[];
  hover?: boolean;
  border?: boolean;
  shadow?: boolean;
};

export const Table = ({
  // select,
  // width,
  // widthFlex,
  headerProps,
  rowProps,
  hover = true,
  border = true,
  shadow = true,
}: TableProps) => {
  return (
    <div
      className={`relative overflow-x-auto${
        shadow ? ' shadow-md' : ''
      } sm:rounded-lg`}
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headerProps?.map((headerProp: HeaderProps) => {
              if (headerProp.type === 'html') {
                return headerProp.html;
              }
              return (
                <th
                  scope="col"
                  className={headerProp.className ?? `px-6 py-4`}
                  colSpan={headerProp.colSpan}
                  rowSpan={headerProp.rowSpan}
                >
                  <span
                    color={headerProp.textColor}
                    style={{ backgroundColor: headerProp.bgColor }}
                  >
                    {headerProp.text}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowProps?.map((rowProp: RowProps) => {
            return (
              <tr
                className={`bg-white${
                  border ? ' border-b' : ''
                } dark:bg-gray-800 dark:border-gray-700${
                  hover ? ' hover:bg-gray-50 dark:hover:bg-gray-600' : ''
                }`}
                onClick={rowProp.onClick}
                id={
                  typeof rowProp.id === 'number'
                    ? rowProp.id.toString()
                    : rowProp.id
                }
              >
                {rowProp.cellProps.map((cell: CellProps) => {
                  if (cell.type === 'text' && cell.bold) {
                    return (
                      <th
                        scope="row"
                        className={
                          cell.className ??
                          `px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white`
                        }
                        id={
                          typeof cell.id === 'number'
                            ? cell.id.toString()
                            : cell.id
                        }
                        rowSpan={cell.rowSpan}
                        colSpan={cell.colSpan}
                        onClick={cell.onClick}
                      >
                        {cell.text}
                      </th>
                    );
                  }
                  if (cell.type === 'html') {
                    return cell.html;
                  }
                  return (
                    <td
                      className={cell.className ?? `px-6 py-4`}
                      id={
                        typeof cell.id === 'number'
                          ? cell.id.toString()
                          : cell.id
                      }
                      rowSpan={cell.rowSpan}
                      colSpan={cell.colSpan}
                      onClick={cell.onClick}
                    >
                      <span
                        color={cell.textColor}
                        style={{ backgroundColor: cell.bgColor }}
                      >
                        {cell.text}
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
