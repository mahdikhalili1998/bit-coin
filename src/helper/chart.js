const getData = (data, type) => {
  const formatData = data[type].map((item) => {
    return { date: item[0], [type]: item[1] };
  });
  return formatData;
};
export default getData;
