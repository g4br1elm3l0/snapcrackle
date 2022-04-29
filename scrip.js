function snapCrackle(maxvalue) {

    let cont = ""
    for (let i = 1; i <= maxvalue; i++) {

        if (i % 2 !== 0 && i % 5 === 0) {
            cont += "SnapCrackle"
        }
        else if (i % 2 !== 0) {
            cont += "Snap"
        }
        else if (i % 5 === 0) {
            cont += "Crackle"
        }
        else {
            cont += i
        }

        if (i !== maxvalue) {
            cont += ", "
        }

    }
    return cont




}
console.log(snapCrackle(15))



