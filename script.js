function convert () {
    let kilometers = Number(document.getElementById("a").value)
    let miles = kilometers/1.609344
    document.getElementById("result").value = miles
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"))
}