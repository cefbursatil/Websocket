const socket = io();


socket.on("carlos", data => {
    console.log(data);
    $("#chat").append(data + "<br>")
})

$("#msn").change(emitir);
$("#btn").click(emitir);


// Send message to server
function emitir() {
    let now = new Date().toLocaleTimeString();
    let msn = `[${now}] ` + $("#msn")[0].value;

    socket.emit("carlos", msn);

    $("#msn")[0].value = "";
}