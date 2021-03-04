const multiFilter = (data, filters) => {
  return data.filter((item) => {
    return Object.entries(filters).every(([filterProperty, filterValues]) => {
      switch(Object.prototype.toString.call(item[filterProperty])){

        case '[object Object]':
          return Object.entries(filterValues).every(([extFilterProperty, extFilterValue]) => {
            return new Map(Object.entries(item[filterProperty])).get(extFilterProperty) === extFilterValue;
          });

        case '[object Array]':
          return item[filterProperty].some((itemValue) => {
            return filterValues.includes(itemValue);
          });

        default:
          return filterValues.includes(item[filterProperty]);
      }
    });
  });
}