import 'regenerator-runtime';

// global variables
const apiKey = 'JWUonCa12tUVewWW0GSE';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

export const postScore = async (name, s) => {
  try {
    const userScore = {
      user: name,
      score: s,
    };
    // request options
    const payload = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userScore),
    };

    // send POST request
    const response = await fetch(url, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.json();
  }
};

export const getScores = async () => {
  try {
    const payload = {
      method: 'Get',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, payload);
    const topScores = await response.json();

    return topScores.result;
  } catch (error) {
    return error.json();
  }
};