const BIN_ID = "69f06608856a6821897fb1aa";
const API_KEY = "$2a$10$gda/knsTTw50yL5IwDrPMeBKB9YORwY1IK5e7CaZXAk/dbi/rWHSW";
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
    "Content-Type": "application/json",
  };

  // Preflight CORS
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    if (event.httpMethod === "GET") {
      // Ler dados do JSONBin
      const res = await fetch(`${BASE_URL}/latest`, {
        headers: {
          "X-Master-Key": API_KEY,
          "X-Bin-Meta": "false",
        },
      });

      if (!res.ok) {
        const err = await res.text();
        return {
          statusCode: res.status,
          headers,
          body: JSON.stringify({ error: "Erro ao ler dados", detail: err }),
        };
      }

      const data = await res.json();
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }

    if (event.httpMethod === "PUT") {
      // Guardar dados no JSONBin
      const body = JSON.parse(event.body || "{}");

      const res = await fetch(BASE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.text();
        return {
          statusCode: res.status,
          headers,
          body: JSON.stringify({ error: "Erro ao guardar dados", detail: err }),
        };
      }

      const data = await res.json();
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Erro interno", detail: err.message }),
    };
  }
};
