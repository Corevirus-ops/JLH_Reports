
export default function NavMain({nav, setNav, reportAdmin, reportBug, reportPlayer}) {

    

return (
    <div className="flex row" >
        <p id={nav == reportPlayer ? "active" : ""} className="nav" onClick={() => setNav(reportPlayer)}>{reportPlayer}</p>
         <p id={nav == reportBug ? "active" : ""} className="nav" onClick={() => setNav(reportBug)}>{reportBug}</p>
          <p id={nav == reportAdmin ? "active" : ""} className="nav" onClick={() => setNav(reportAdmin)}>{reportAdmin}</p>
    </div>
)

}