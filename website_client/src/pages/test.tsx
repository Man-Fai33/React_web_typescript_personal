import React from 'react'
import 'handsontable/dist/handsontable.full.min.css';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';
registerAllModules();
export default function TestPage() {


     const data = [
          ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
          ['2017', 10, 11, 12, 13, 15, 16],
          ['2018', 10, 11, 12, 13, 15, 16],
          ['2019', 10, 11, 12, 13, 15, 16],
          ['2020', 10, 11, 12, 13, 15, 16],
          ['2021', 10, 11, 12, 13, 15, 16]
     ];

     return (
          <div className='bg-slate-200 w-full  h-full'>
               <HotTable
                    colHeaders={["year", "name", "1", "2", "3", "4"
                         , "5"]}
                    data={JSON.parse(JSON.stringify(data))}
                    licenseKey="non-commercial-and-evaluation"
                    settings={{
                         //settring size 
                         height: "auto",
                         width: "auto",
                         autoRowSize: true,
                         autoColumnSize: true,
                         filters: true,
                         colHeaders: true,
                         rowHeaders: true,
                         dropdownMenu: true,
                         multiColumnSorting: true,
                         manualRowMove: true,
                         manualColumnMove: true,
                         dragToScroll: true,

                    }}
                    contextMenu={{
                         items:{
                              cut:{
                              }
                         }
                    }}
               />
          </div>
     );
}