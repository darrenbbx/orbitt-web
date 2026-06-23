export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { password } = JSON.parse(event.body || '{}');

  if (password === 'orbitt2026') {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ ok: false })
  };
};
