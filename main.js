let x = 50
let z
let Punktzahl = 0

function higher() {
    z = Math.round(Math.random()*100)
    document.getElementById("ausgabeDerZahl").innerHTML = z
    if (z >= x) {
        document.getElementById("ausgabeErgebnis").innerHTML = "Du hast richtig geraten"
        x = z
        Punktzahl = Punktzahl + 1
        document.getElementById("ausgabeDerStreak").innerHTML = Punktzahl
    } else {
        document.getElementById("ausgabeErgebnis").innerHTML = "Du hast falsch geraten"
        Punktzahl = 0
        document.getElementById("ausgabeDerStreak").innerHTML = Punktzahl
    }
}

function lower() {
    z = Math.round(Math.random() * 100)
    document.getElementById("ausgabeDerZahl").innerHTML = z
    if (z <= x) {
        document.getElementById("ausgabeErgebnis").innerHTML = "Du hast richtig geraten"
        x = z
        Punktzahl = Punktzahl + 1
        document.getElementById("ausgabeDerStreak").innerHTML = Punktzahl
    } else {
        document.getElementById("ausgabeErgebnis").innerHTML = "Du hast falsch geraten"
        Punktzahl = 0
        document.getElementById("ausgabeDerStreak").innerHTML = Punktzahl
    }
}

function Reload() {
    location.reload()
}