export const formatViewCount = (views) => {
  if (views >= 1000000) {
    //   Convert to millions and round to one decimal place
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    //  Convert to thousands
    return (views / 1000).toFixed(1) + "K";
  } else {
    // Dispaly as it is
    return views.toString();
  }
};

export const timeAgo = (publishedAt) => {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();

  const timeDifference = currentDate - publishedDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Assuming an average month is 30 days
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
};
