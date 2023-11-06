import React, { useEffect, useState } from 'react';

export default function Test2() {
     const [razorPageContent, setRazorPageContent] = useState('');

     useEffect(() => {
      
          const razorPageUrl = 'https://localhost:7013/index';  
       
          fetch(razorPageUrl)
               .then((response) => {
                    if (response.ok) {
                         return response.text();  
                    } else {
                         throw new Error('Failed to fetch Razor page');
                    }
               })
               .then((content) => {
                    setRazorPageContent(content);  
               })
               .catch((error) => {
                    console.error('Error:', error);
                    });
          }, []);

     return (
          <div>
               <h1>Razor Page Content</h1>
               <div dangerouslySetInnerHTML={{ __html: razorPageContent }} />
               
          </div>
     );
}



