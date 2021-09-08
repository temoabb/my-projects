const url = 'https://router-version2-default-rtdb.europe-west1.firebasedatabase.app';


export const postQuote = async (quoteData) => {
  const response = await fetch(
    `${url}/quotes.json`,
    {
      method: 'POST',
      body: JSON.stringify(quoteData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Could not create a single quote.");

  return null;
}


export const getAllQuotes = async () => {
  const response = await fetch(`${url}/quotes.json`);
  if (!response.ok) throw new Error('Something went wrong');

  const responseData = await response.json();
  // console.log(responseData);

  const transformedQuotes = [];

  for (const key in responseData) {
    const quoteData = {
      id: key,
      ...responseData[key]
    }

    transformedQuotes.push(quoteData);
  }

  // console.log(transformedQuotes);

  return transformedQuotes;
};


export const getSingleQuote = async (quoteDatabaseId) => {
  const response = await fetch(`${url}/quotes/${quoteDatabaseId}.json`);
  if (!response.ok) throw new Error('Something went wrong');

  const data = await response.json();
  console.log(data, 'data');

  const loadedQuote = {
    id: quoteDatabaseId,
    ...data
  };

  console.log('loadedQuote', loadedQuote);

  return loadedQuote;
};