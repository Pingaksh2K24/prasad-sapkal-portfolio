export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};