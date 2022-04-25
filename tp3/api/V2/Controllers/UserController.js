import User from './Models/User'

export default {
    get_all: (req, res) => {
        res.status(200).json(User.get_all())
    },
    get: (req, res) => {
        const user = User.get_all(req.params.id)
        if (user)
            res.status(200).json(user)
        else res.status(404).json({
            error: 'User Not Found'
        })
    },
    
    create: (req, res) => {

        const new_user = User.add(req.body)

        res.status(201).json(new_user)
    },
    delete: (req, res) => {

        const id = req.params.id

        const new_user = User.delete(id)

        res.status(200).json(new_user)
    },
    

        

        

    }
