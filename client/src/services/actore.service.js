import axios from 'axios'

const API_URL = 'http://localhost:8000/api/v1'

const getAll = async () => {
    const response = await axios.get(`${API_URL}/actors`);
    const actors = response.data;

    console.log('getAll: ', actors.data);

    return actors.data
}

// const createV2 = async (data) => {
//     const response = await axios.post(`${API_URL}/actors`, data);
//     return response.data.data
// }

const create = async (data) => {
    await fetch(`${API_URL}/actors`, {
        method: 'POST',
        body: JSON.stringify({
            first_name: data.first_name,
            last_name: data.last_name
        }),
        headers: {
            'Content-type': 'application/json'
        }
        
    })
    .then( (res) => res.json())
    .catch( (err) => console.log(err.message))
}

const ActorService = {
    getAll,
    create,
    // createV2
}

export default ActorService