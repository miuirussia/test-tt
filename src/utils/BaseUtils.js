export function sort(a, b, sortBy, direction = 1) {
    let left = a[sortBy], right = b[sortBy];
    if (typeof left === "string" && typeof right === "string") {
        let nameA = left.toLowerCase(), nameB = right.toLowerCase();
        if (nameA < nameB)
            return -1 * direction;
        if (nameA > nameB)
            return direction;
        return 0;
    } else {
        return direction * (left - right);
    }
}

export function getHashParams() {
    let hashParams = {};
    let a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&;=]+)=?([^&;]*)/g,
        d = function (s) {
            return decodeURIComponent(s.replace(a, " "));
        },
        q = window.location.hash.substring(1);

    let e = r.exec(q);
    while (e !== null) {
        hashParams[d(e[1])] = d(e[2]);
        e = r.exec(q);
    }

    return hashParams;
}