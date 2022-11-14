const compareDate = (date: string): boolean => (
    new Date().toISOString() > new Date(date).toISOString()
);

export default compareDate;