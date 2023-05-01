function parseContentData(data) {
  return Object.keys(data)
    .map(key => {
      return {
        room_name: key,
        ...data[key],
      };
    })
    .sort(function (a, b) {
      return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
    });
}

export default parseContentData;
