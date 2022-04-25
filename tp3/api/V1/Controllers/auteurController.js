import {
    validationResult
} from "express-validator"
import {
    add_host,
    get_podcast_hosts
} from "../../../utils/database"

export default {
    get: (req, res) => {
        const auteur = get_user_auteur(req.params.id)
        if (auteur.length != 0)
            res.status(200).json(auteur)
        else res.status(404).json({
            error: 'user or Hosts Not Found'
        })
    },
    create: (req, res) => {
        const user_id = req.params.id

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_auteur = add_host({
            user_id,
            ...req.body
        })

        res.status(200).json(new_auteur)
    }
}