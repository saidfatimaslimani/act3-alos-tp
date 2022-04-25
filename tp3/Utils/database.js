import {
    writeFileSync
} from 'fs'
import user from '../../database/user.json'
import auteur from '../../database/auteur.json'


export function get_user() {
    return user

}

export const get_user = id => {
    const user = user
.find(user => user.id == id)

    return user
}


export function add_user(user) {
    let new_user
 = [
        ...user
    ,
        {
            ...user,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_user
    )

    writeFileSync("database/user.json", new_data)

    return new_user

}


export function update_user(id, data) {
    let index = user
.findIndex(user => user.id == id)
    Object.entries(data).map(([key, value]) => {
        user
    [index][key] = value
    });

    const new_data = JSON.stringify(user
    )

    writeFileSync("database/user.json", new_data)

    return user

}
export function delete_user(id) {
    let index = user
.findIndex(user => user.id == id)

    user
.splice(index, 1)
    delete_auteur(id)
    const new_data = JSON.stringify(user
    )

    writeFileSync("database/user.json", new_data)

    return user

}




/**
 * auteur
 */

export function get_auteur() {
    return auteur
}

export const get_user_auteur = user_id => {

    return auteur.filter(host => host.user_id == user_id)
}

export function add_host(host) {
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
}

export function delete_auteur(user_id) {
    let new_auteur = auteur.filter(host => host.user_id != user_id)

    const new_data = JSON.stringify(new_auteur)

    writeFileSync("database/auteur.json", new_data)

    return new_auteur
}



//users

export function get_user() {
    return user;
}

//get user

export const get_user = id => {
    const user = user.find(user => user.id == id)

    return user
}


//create user

export function add_user(user) {
    let new_users = [
        ...users,
        {
            ...user,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_users)

    writeFileSync("database/user.json", new_data)

    return new_users
}

//delete user

export function delete_user(id) {
    let index = users.findIndex(user => user.id == id)

    users.splice(index, 1)
    const new_data = JSON.stringify(users)

    writeFileSync("database/user.json", new_data)

    return user
}
