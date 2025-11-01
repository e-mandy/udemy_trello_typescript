// Tuple

let tuple: [boolean, number]

tuple = [false, 20]

// Apparemment le .push fonctionne toujours sur le Tuple


// Enum

const Roles = {
    ADMIN: "ADMIN",
    USER: "USER",
    GUEST: "GUEST"
}

type Role = typeof Roles[keyof typeof Roles]