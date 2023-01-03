export const parseUser = jsonData => {
  let parsingResult;
  try {
    parsingResult = JSON.parse(jsonData);
  } catch (e) {
    parsingResult = null;
  } finally {
    return parsingResult;
  }
};

// parseUser('{"name": "Tom"}');