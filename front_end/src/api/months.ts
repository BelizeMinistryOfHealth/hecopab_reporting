const months = [
  { name: 'Jan', value: 1 },
  { name: 'Feb', value: 2 },
  { name: 'Mar', value: 3 },
  { name: 'Apr', value: 4 },
  { name: 'May', value: 5 },
  { name: 'Jun', value: 6 },
  { name: 'Jul', value: 7 },
  { name: 'Aug', value: 8 },
  { name: 'Sep', value: 9 },
  { name: 'Oct', value: 10 },
  { name: 'Nov', value: 11 },
  { name: 'Dec', value: 12 },
];

export const monthName = (v: number): string => {
  const month = months.find((m) => m.value === v);
  return month?.name ?? 'N/A';
};

export default months;
