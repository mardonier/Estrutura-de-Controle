let spaceshipName = prompt("Digite o nome da nave")

let spaceshipvelocity = 0

let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
            "1 - Acelerar a nave em 5km/s?\n" +
            "2 - Desacelerar a nava em 50km/s?\n" +
            "3 - Imprimir dados de bordo?\n" +
            "4 - Sair de programa?")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBooardData(name, velocity) {
    alert("Espaçonave: " + name  + "\nVelocidade: " + velocity + " km/s")
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            spaceshipvelocity = speedUp(spaceshipvelocity)
            break
        case "2":
            spaceshipvelocity = slowDown(spaceshipvelocity)
            break
        case "3":
            printSpaceshipBooardData(spaceshipName, spaceshipvelocity)
            break
        default:
            alert("Encerrando programa de bordo.")
    }
} while (chosenOption != "4") {

}

function setSpaceshipDetails(){
    let velocity = 50
    if(velocity == 50) {
        velocity = 60
        var spaceshipName = "Elemental"
        let spaceshipType = "Discovery"
    }
    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)
}

setSpaceshipDetails()

function setSpaceshipDepatils2() {
    console.log(spaceshipName)
    console.log(spaceshipType)
    var spaceshipName = "Elemental"
    let spaceshipType = "Discovery"
    console.log(spaceshipName)
    console.log(spaceshipType)
}
setSpaceshipDetails()
