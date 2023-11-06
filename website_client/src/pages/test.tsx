import { useState } from 'react';
import Button from '../component/button/button';
import { ApiHelper } from '../helper/api/apiHelper';

export default function TestPage(_props: any) {
     const [file, setFile] = useState<File | null>(null);

     const handleUpload = async () => {
          if (file !== null) {
               let response = await ApiHelper.AsyncUploadFile(file)
          }
     }
     return <>
          <form method="POST" action="/upload" encType="multipart/form-data">
               <input type="file" name="file" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} />
               <Button onClick={handleUpload} > upload</Button>
          </form>
     </>
}
