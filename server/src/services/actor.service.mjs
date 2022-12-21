import db from '../config/db.mjs';

const getAllActors = async () => {
    const sql = 'SELECT * FROM actores';
    const [results] = await db.query(sql)

    return results
}

const getActorById = async (id) => {
    const sql = 'SELECT * FROM actores WHERE actor_id = ?';
    const [results] = await db.query(sql, [id])

    return results[0]
}

export default {
    getAllActors,
    getActorById
}