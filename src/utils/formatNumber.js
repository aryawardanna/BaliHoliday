// eslint-disable-next-line import/no-anonymous-default-export
export default (number) => {
  const formatNumbering = Intl.NumberFormat('id-ID');
  return formatNumbering.format(number);
};
