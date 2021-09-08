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