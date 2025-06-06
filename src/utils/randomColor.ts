export const getRandomColor = (seed?: number): string => {
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#CECECE', '#FFB6C1', '#90EE90', '#FD12AA', '#DDA0DD', '#FFA07A', '#20B2AA', '#87CEFA', '#FF4500'];
  if (typeof seed === 'number') {
    return colors[seed % colors.length];
  }
  return colors[Math.floor(Math.random() * colors.length)];
};
