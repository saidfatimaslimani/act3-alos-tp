import auteur from '../../../../database/auteur.json'
import {
    writeFileSync
} from 'fs'

export default {
    get_all() {
        return auteur;
    },

    get(id) {
        const host = auteur.find(host => host.id == id)

        return host
    },


    add(host) {
        let new_auteur = [
            ...auteur,
            {
                ...host,
                "id": Date.now().toString(36)
            }
        ]
        const new_data = JSON.stringify(new_auteur)

        writeFileSync("database/auteur.json", new_data)

        return new_auteur
    },

    delete(podcast_id) {
        let new_auteur = auteur.filter(host => host.podcast_id != podcast_id)

        const new_data = JSON.stringify(new_auteur)

        writeFileSync("database/auteur.json", new_data)

        return new_auteur
    }
}