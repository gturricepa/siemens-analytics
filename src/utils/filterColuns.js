export const filterColumns = (data, columnsToUse) => {
  return data.map((item) => {
    const filteredItem = {};
    columnsToUse.forEach((key) => {
      if (key in item) {
        filteredItem[key] = item[key];
      }
    });

    return filteredItem;
  });
};

export const updateColumnValue = (
  data,
  targetColumn,
  valueToKeep,
  valueToReplace
) => {
  return data.map((item) => {
    const updatedItem = { ...item };

    if (updatedItem[targetColumn] === valueToKeep) {
      updatedItem[targetColumn] = valueToKeep;
    } else {
      updatedItem[targetColumn] = valueToReplace;
    }

    return updatedItem;
  });
};
