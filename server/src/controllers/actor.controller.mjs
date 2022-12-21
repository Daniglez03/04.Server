import actorService from '../services/actor.service.mjs'
import httpCodes from '../errors/httpCodes.mjs'

// const getAllActors = async (req, res) => {
//     try {
//         const actors = await actorService.getAllActors()
//         res.json({
//             data: actors,
//             status: 'success'
//         })
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// }

const getAllActors = async (req, res) => {
    try {
        const data = await actorService.getAllActors()
        res.send({
            statusCode: httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores table is empty'
                : 'Sucesfully retrieved all actors',
            data
        })
    } catch (err) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}

const getActorById = async (req, res) => {
    console.log(req.params)
    const { id } = req.params

    const {first_name, last_name} = req.body

    if (!id) {
        res.status(httpCodes.BAD_REQUEST).send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage: 'Param id is required',
            message: 'Actor Id is needed',
            data: null
        })
    }

    try {
        const data = await actorService.getActorById(id)
        res.send({
            statusCode: !data || data.lenght === 0 ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores is not found'
                : 'Sucesfully retrieved actor data',
            data
        })
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}

export default {
    getAllActors,
    getActorById
}