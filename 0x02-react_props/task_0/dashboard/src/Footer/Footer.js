import { getFullYear, getFooterCopy } from '../utils.js';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <hr className="footer_hr" />
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </>
  )
}