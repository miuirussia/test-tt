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
        let nameA = parseInt(left, 10), nameB = parseInt(right, 10);
        return direction * (nameA - nameB);
    }
}