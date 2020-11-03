const request = async (query) => {
  const spreadsheetId = '1HbGGv7ihEW7uHkU4znlLL8FwJPBb-wQ3CFZlYfUtbDk';
  const response = await fetch(
    `https://api.graphqlsheet.com/api/${spreadsheetId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: '1a28a8ce133c440d00d3e4d2081b05aa66b642af'
      },
      body: JSON.stringify({
        query
      })
    }
  );
  const responseJSON = await response.json();
  return responseJSON.data.get;
};

export default request;
