export function extractTime(dateString) {
  const date = new Date(dateString);
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  const timeString = date.toLocaleTimeString('en-US', options);

  // const hours = padZero(date.getHours());
  // const minutes = padZero(date.getMinutes());
  return `${timeString}`;
}

// function padZero(number) {
//   return number.toString().padStart(2, "0");
// }


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


export const sideBarDateTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  const options = { hour: 'numeric', minute: 'numeric', hour12: true };

  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  const timeString = date.toLocaleTimeString('en-US', options);

  // Format date as DD-MM-YY
  const padToTwoDigits = (num) => num.toString().padStart(2, '0');
  const day = padToTwoDigits(date.getDate());
  const month = padToTwoDigits(date.getMonth() + 1);
  const year = date.getFullYear().toString().slice(-2);
  const formattedDate = `${day}-${month}-${year}`;

  if (diffInDays === 0) {
    return `${timeString}`;
  } else if (diffInDays === 1) {
    return `Yesterday`;
  } else {
    return `${formattedDate}`;
  }
};


export default formatLastSeen;

