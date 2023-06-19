video.addEventListener("click", function vide0() {
    alert("This video Nissan Skyline GTR");
});

audio.addEventListener("click", function vide0() {
    alert("This Audio Nissan Skyline GTR");
});

picture.addEventListener("click", function vide0() {
    alert("This Picture Nissan Skyline GTR");
})

function kirimData() {
    var name = document.getElementById("nama").value
    var nim = document.getElementById("nim").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var Alamat = document.getElementById("alamat").value
    var angkatan = document.getElementById("angkatan").value
    var Date = document.getElementById("Date").value

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + Alamat +
        "\nangkatan : " + angkatan +
        "\nDate : " + Date 
    )
}