import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { datetimeTinyFormatterUTC, makeData, sortDatetimes } from './Utils';


export const ReactTableV8 = ()=> {
    const columns = useMemo(() => [
        {
            id: 'date-890',
            accessorFn: (item) => (
                datetimeTinyFormatterUTC(item.arrivalDatetime)
            ),
            header: ()=> <div className="font-bold">Departure</div>,
            sortingFn: (a, b) => sortDatetimes(a, b)
        },
        {
            header: "Duration",
              accessorKey: "durationInMinutes",
              minWidth: 100,
              maxWidth: 200,
        },
        {
            header: "Savings",
              accessorKey: "savings",
              minWidth: 100,
              maxWidth: 200,
              Cell: props => (
                <div className="px-1 text-primary-500 font-bold">
                  {`${(props/100)} tonnes`}
                </div>),
                sortingFn: 'alphanumeric',
        }
      ], []);

    const [data, setData] = useState(() => makeData());
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return  <div className="p-2">
    {data && 
    <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="font-bold">
                {headerGroup.headers.map(header => (
                    <th key={header.id}>
                    {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                    </th>
                ))}
                </tr>
            ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map((row) => {
            return (
            <tr key={row.id} >
            {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id}>
                    
                
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
             
                </td>
            ))}
            </tr>
        );})}
        </tbody>
    </table>
    }
    <div className="h-4" />
    </div>;

};