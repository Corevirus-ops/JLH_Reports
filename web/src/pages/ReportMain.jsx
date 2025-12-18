
import './report.css';
import { useState, useEffect } from 'react';

import NavMain from './nav/NavMain';
import ReportPlayerMain from './reportPlayer/ReportPlayerMain';
import ReportBugMain from './reportBug/ReportBugMain';
import ReportAdminMain from './reportAdmin/ReportAdminMain';
import Sign from './Sign';

let reportPlayer = 'Report Player';
let reportBug = 'Report Bug';
let reportAdmin = 'Report Admin'; 

export default function ReportMain({closeMenus, resourceName, postData, image}) {
    const [nav, setNav] = useState();
            const [cooldown, setCoolDown] = useState(false);
    
        useEffect(() => {
            if (!cooldown) {
                setTimeout(() => setCoolDown(false), 15000)
            }
        });

    async function sendToDiscord(link, title, data, category, tag) {
        let sentData = JSON.stringify({link: link, title: title, data: data, category: category, tag: tag})
        try {
           fetch(`https://${resourceName}/sendToDiscord`, { method: 'POST', body: sentData })
        } catch (e) {
            console.error(e);
        }
    }

return (
    <div className='reportBox flex column center-items'>
        <div className='flex row'>
        <h1 style={{}}> Just Like Home Report System</h1>
        <p className='closeButton' onClick={closeMenus}> X</p>
        </div>
        <nav className='flex center' >
            <NavMain  nav={nav} setNav={setNav} reportPlayer={reportPlayer}  reportBug={reportBug} reportAdmin={reportAdmin}  />
        </nav>
         {nav == reportPlayer && <ReportPlayerMain postData={postData} sendToDiscord={sendToDiscord} cooldown={cooldown} setCoolDown={setCoolDown} />}
         {nav == reportBug && <ReportBugMain postData={postData} sendToDiscord={sendToDiscord} cooldown={cooldown} setCoolDown={setCoolDown}/>}
         {nav == reportAdmin && <ReportAdminMain postData={postData} sendToDiscord={sendToDiscord} cooldown={cooldown} setCoolDown={setCoolDown} />}
        {!nav && <Sign image={image} />}

    </div>

)

}