export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}


const formatLastSeen = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  const options = { hour: 'numeric', minute: 'numeric', hour12: true };

  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  const timeString = date.toLocaleTimeString('en-US', options);
  const dateStringFormatted = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  if (diffInDays === 0) {
    return `Last seen today at ${timeString}`;
  } else if (diffInDays === 1) {
    return `Last seen yesterday at ${timeString}`;
  } else {
    return `Last seen on ${dateStringFormatted}`;
  }
};

export default formatLastSeen;

