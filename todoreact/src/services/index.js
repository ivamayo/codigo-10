const url = "https://6363105e66f75177ea3c9343.mockapi.io/tareas";

// GET : Listar
// POST: Crear
// PUT: Actualizar
// DELETE: Eliminar
export const getProfile = async () => {
  try {
    const response = await fetch("https://api.github.com/users/ivamayo");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const get = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// id: Tarea
export const update = async (id, body) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Para la eliminar un registro unicamente necesito el id
export const destroy = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};