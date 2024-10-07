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

export const formatDateExcel = (data, columns) => {
  return data.map((item) => {
    columns.forEach((column) => {
      const dateStr = item[column];
      if (dateStr) {
        const parts = dateStr.split(" ")[0].split("-");
        item[column] = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    });
    return item;
  });
};
