const url = "https://6363105e66f75177ea3c9343.mockapi.io/tareas";

export const get = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error)
    {
        console.log(error);
    }
};

export const post = async (body) => {
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }catch(error)
    {
        console.log(error);
    }
};
export const update = async (id, body) => {
    try{
        const response =await fetch(`${url}/${id}`,{
            method: "PUT",
            
        });
    }catch(error){
        console.log(error);
    }
};