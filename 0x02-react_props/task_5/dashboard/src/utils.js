export function getFullYear() {
  const d = new Date();
  return d.getFullYear();
}

export function getFooterCopy(isIndex) {
  let returnText = "Holberton School main dashboard";
  if (isIndex) {
    returnText = "Holberton School";
    return (returnText);
  }
  return returnText;
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD"
}
