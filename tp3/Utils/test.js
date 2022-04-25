import fs, {
    writeFileSync
} from 'fs';
import user from '../database/user.json';
import auteur from '../database/auteur.json'

dothing()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dothing() {
    var stream = fs.createWriteStream("database/user.json");
    stream.on('error', console.error);
    let new_user = user
    for (let i = 0; i < user.length; i++) {
        delete new_user[i]['auteur']
    }
    const new_data = JSON.stringify(new_user);
    stream.write(new_data);
    stream.end();
}

function create_host(stream, host) {
    console.log(host.id)
    let new_auteur = [
        ...auteur,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ];
    const new_data = JSON.stringify(new_auteur);
    stream.write(new_data);

}