import { useState, useEffect } from "react"

export default function ReportPlayerMain({postData, sendToDiscord, cooldown, setCoolDown}) {
    const [playerName, setPlayerName] = useState('');
    const [comment, setComment] = useState('');

    function changePlayerName(e) {
        if (e.target.value.length > 20) return
        setPlayerName(e.target.value);
    }

    function changeComment(e) {
        if (e.target.value.length > 1600) return
        setComment(e.target.value);
    }

        function send() {
        if (!playerName || !comment) return
        sendToDiscord(postData.admin.report, playerName, comment, 'Report Of Admin', postData.admin.tag)
        setPlayerName('Message Was Sent');
        setComment('');
        setCoolDown(true);
    }

    return (
        <>
        <div className="flex column reportPlayer center-items" >
        <label htmlFor="reportedPlayer" >Admins Name or Id</label>
        <input id="reportedPlayer" type="text" value={playerName} onChange={(e) => changePlayerName(e)} placeholder="admin Namec" />
                <label htmlFor="reportPlayerComment">Describe What Happened:</label>
    <textarea id="reportPlayerComment" name="reportPlayerComment" rows="20" cols="100" value={comment} onChange={(e) => changeComment(e)} placeholder="1600 Max Characters"></textarea>
       <button onClick={send} disabled={cooldown} >Submit</button>
        </div>

        </>
    )
}