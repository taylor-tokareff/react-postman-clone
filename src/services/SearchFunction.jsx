export const SearchFunction = async (url, formMethod, putBody) => {

  if (formMethod === 'DELETE' || formMethod === 'GET') {
    const res = await fetch(url, {
      method: formMethod, headers: {
        'Content-type': 'application/json'
      },
    });


    const json = await res.json();


    return json;
  } else {
    const res = await fetch(url, {
      method: formMethod,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(putBody)
    });

    const json = await res.json();

    return json;
  }

};
