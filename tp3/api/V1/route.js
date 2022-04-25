import express from 'express'
import validation from '../../utils/validation'
import PodcastController from './Controllers/userController'
import HostController from './Controllers/auteurController'

const router = express.Router()

// user

router.get('/user', userController.get_all)

router.get('/user/:id',
    ...validation.get_user,
    userController.get)

router.post('/user',
    ...validation.create_user,
    userController.create)

router.put('/user/:id',
    ...validation.update_user,
    userController.update)
router.delete('/user/:id',
    ...validation.delete_user,
    userController.delete) //deletes auteur
 too


// auteur

router.get('/user/:id/auteur',
    auteurController.get
)

router.post('/user/:id/auteur',
    ...validation.create_auteur,
    auteurController.create)


export default router;