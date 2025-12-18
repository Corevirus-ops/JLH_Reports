import { useState, useEffect } from "react"


export default function ReportBugMain({postData, sendToDiscord, cooldown, setCoolDown}) {
    const [priority, setPriority] = useState('Medium');
    const [comment, setComment] = useState('');

        function changeComment(e) {
        if (e.target.value.length > 1600) return
        setComment(e.target.value);
    }

        function send() {
        if (!comment) return
        sendToDiscord(postData.bug.report, priority, comment, 'Bug Report', postData.bug.tag)
        setComment('Message Was Sent');
        setCoolDown(true);
    }


    return (
                <>
        <div className="flex column reportPlayer center-items" >
        <label htmlFor="reportedBug" >Priority Type</label>
        <select  id="reportedBug" name="reportedBug" value={priority} onChange={(e) => setPriority(e.target.value)} >
  <option value="veryLow">Very Low</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
   <option value="veryHigh">Very High</option>
</select>
                <label htmlFor="reportBugComment">Describe What Happened:</label>
    <textarea id="reportBugComment" name="reportBugComment" rows="20" cols="100" value={comment} onChange={(e) => changeComment(e)} placeholder="1600 Max Characters"></textarea>
        <button onClick={send} disabled={cooldown} >Submit</button>
        </div>

        </>
    )
}