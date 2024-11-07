export default function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type}>
      {value}
      <span data-testid="spanHtml" dangerouslySetInnerHTML={{ __html: html }} />
    </li>
  )
}