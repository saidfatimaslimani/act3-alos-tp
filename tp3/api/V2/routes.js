import express from 'express'
import validation from '../../utils/validation'
import userController from './Controllers/userController'
import auteurController from './Controllers/auteurController'

const router = express.Router()

// user

router.get('/user', userController.get_all)

router.get('/user/:id',
    ...validation.get_user
,
    userController.get)

router.post('/user',
    ...validation.create_user
,
    userController.create)

router.put('/user/:id',
    ...validation.update_user
,
    userController.update)
router.delete('/user/:id',
    ...validation.delete_user
,
    userController.delete) //deletes auteurs too


// auteurs

router.get('/user/:id/auteurs',
    auteurController.get
)

router.post('/user/:id/auteurs',
    ...validation.create_auteur,
    auteurController.create)

// reviews

router.get('/user/:id/reviews',
    userController.get_reviews)






// user

router.get('/user',
    UserController.get_all)

router.get('/user/:id',
    UserController.get)



export default router;