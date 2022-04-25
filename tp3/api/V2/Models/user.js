import user from '../../../../database/user.json'

import auteur from '../../../../database/auteur.json'
import {
    writeFileSync
} from 'fs'


export default {
    get_all() {
        return user
    },

    get(id) {
        const user = user.find(user => user.id == id)

        return user
    },


    add(user) {
        let new_user = [
            ...user,
            {
                ...user,
                "id": Date.now().toString(36)
            }
        ]
        const new_data = JSON.stringify(new_user)

        writeFileSync("database/user.json", new_data)

        return new_user
    },


    update(id, data) {
        let index = user.findIndex(user => user.id == id)
        Object.entries(data).map(([key, value]) => {
            user[index][key] = value
        });

        const new_data = JSON.stringify(user)

        writeFileSync("database/user.json", new_data)

        return user
    },

    delete(id) {
        let index = user.findIndex(user => user.id == id)

        user.splice(index, 1)
        delete_auteur(id)
        const new_data = JSON.stringify(user)

        writeFileSync("database/user.json", new_data)

        return user
    },

    get_auteur(user_id) {

        return auteur.filter(auteur => auteur.user_id == user_id)
    },

    
}