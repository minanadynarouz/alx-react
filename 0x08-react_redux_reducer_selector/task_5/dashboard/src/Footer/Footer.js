import { getFullYear, getFooterCopy } from '../utils.js';


export default function Footer() {
  return (
    <>
      <hr className="footer_hr" />
      <div className="App-footer" data-testid="footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </>
  )
}