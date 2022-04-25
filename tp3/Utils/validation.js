import {
    body,
    param,
    check
} from 'express-validator'

function check_if_date(string) {
    return !isNaN(new Date(string).getDate())
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
    get_user: [
        param('id').isString().trim()
    ],
    create_user: [
        body('first-name').isString().trim().customSanitizer(value => capitalize(value)),
        body('last-name').isString().trim().customSanitizer(value => capitalize(value)).isIn(['Ongoing', 'Completed', 'Hiatus']),
        body('email').isNumeric().toInt(),
        body('auteur').isArray(),
        check('auteur.*.id').isInt(),
        check('auteur.*.name').isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim()

    ],
    update_user: [
        body('name').optional().isString().trim().customSanitizer(value => capitalize(value)),
        body('auteur').optional().isArray(),
        check('auteur.*.id').optional().isInt(),
        check('auteur.*.name').optional().isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim(),
        param('id').isString().trim()
    ],
    delete_user: [
        param('id').isString().trim()
    ],
    // auteur
    create_host: [
        body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('email').trim().isEmail()
    ]
}