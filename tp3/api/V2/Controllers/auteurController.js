import auteur from './Models/auteur'

export default {
    get_all: (req, res) => {
        res.status(200).json(auteur.get_all())
    },
    get: (req, res) => {
        const auteur = auteur.get(req.params.id)
        res.status(200).json(auteur)
    },
    create: (req, res) => {
        const podcast_id = req.params.id

        const new_auteur = auteur.add({
            user_id,
            ...req.body
        })

        res.status(200).json(new_auteur)
    }
}