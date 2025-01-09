export const findUserById = (users, id) => {
    let newUsers = []

    users.map((user) => {
        if (user.id.toString() === id.toString()) {
            newUsers.push(user)
        }
    })

    return JSON.stringify(newUsers)
}

export const removeUrlSlash = (req) => {
    if (req.url.endsWith("/")) {
        req.url = req.url.slice(0, req.url.length -1)
    }
}