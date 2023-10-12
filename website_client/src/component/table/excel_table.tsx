import { HotTable } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import React from 'react'

// register Handsontable's modules
registerAllModules();
export default function ExcelTable() {
     const data = [
          ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
          ['2017', 10, 11, 12, 13, 15, 16],
          ['2018', 10, 11, 12, 13, 15, 16],
          ['2019', 10, 11, 12, 13, 15, 16],
          ['2020', 10, 11, 12, 13, 15, 16],
          ['2021', 10, 11, 12, 13, 15, 16]
     ];

     return (
          <HotTable
               data={data}
               startRows={5}
               startCols={5}
               height="auto"
               width="auto"
               colHeaders={true}
               minSpareRows={1}
               licenseKey="non-commercial-and-evaluation"
          />
     );
}