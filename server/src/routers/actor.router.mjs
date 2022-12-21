import { Router } from 'express'
import actorController from '../controllers/actor.controller.mjs'
import actorService from '../services/actor.service.mjs'

const router = Router()

// router.get('/actors', async (req, res) => {
//     const data = await actorService.getAllActors()
//     res.send(data)
// })

/**
 * Verbos HTTP
 * Method               URL                                 ACTIONS
 *  GET     http://localhost:8000/api/v1/actors     Retrive all actors
 *  GET     http://localhost:8000/api/v1/actors/1   Retrive actor where id = 1
 *  POST    http://localhost:8000/api/v1/actors     Add new actor
 *  PUT     http://localhost:8000/api/v1/actors/1     Update actor where id = 1
 *  DELETE  http://localhost:8000/api/v1/actors/1     Delete actor where id = 1
 * 
 *  GET     http://localhost:8000/api/v1/actors?name=xxx    Search actor by first_name
 */

router.route('/actors').get(actorController.getAllActors)

router.route('/actors/:id').get(actorController.getActorById)


export default router