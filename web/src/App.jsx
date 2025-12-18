
import ReportMain from './pages/ReportMain';
import { useState, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
   const [resourceName, setResourceName] = useState('');
   const [postData, setPostData] = useState({});
   const [image, setImage] = useState('');

   useEffect(() => {

  const addBackout = (event) => {
    if (event.key === 'Escape') {
        closeMenus();
    }
  };

  window.addEventListener('keydown', addBackout);


  return () => {
    window.removeEventListener('keydown', addBackout);
  };
});

useEffect(() => {
  const handleMessage = (event) => {
    if (event.data.type === 'JLH_OPENREPORTMENU') {
      setIsOpen(true);
      setResourceName(event.data.resourceName);
      setPostData(event.data.links);
      setImage(event.data.image);
    } 
  };

  window.addEventListener('message', handleMessage);

  return () => {
    window.removeEventListener('message', handleMessage);
  };
}, []);

    function closeMenus() {
        fetch(`https://${resourceName}/exit`, { method: 'POST' });
setIsOpen(false);
    }


  return (
    <>
    { isOpen && <ReportMain closeMenus={closeMenus} postData={postData} resourceName={resourceName} image={image} />}
    </>
  )
}

export default App
