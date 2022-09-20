
function getValue() {
    let x = {};
    x["form"] = document.getElementById('calcForm');
    x["angkaSatu"] = parseFloat(document.getElementById("angka1").value);
    x["angkaDua"] = parseFloat(document.getElementById("angka2").value);
    
    return x
}

function tambah() {
    let {form, angkaSatu, angkaDua} = getValue();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu + angkaDua;
    form.hasil.value = total;
}

function kurang() {
    let {form, angkaSatu, angkaDua} = getValue();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu - angkaDua;
    form.hasil.value = total;
}

function kali() {
    let {form, angkaSatu, angkaDua} = getValue();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu * angkaDua;
    form.hasil.value = total;
}

function bagi() {
    let {form, angkaSatu, angkaDua} = getValue();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = angkaSatu / angkaDua;
    form.hasil.value = total;
}

function pangkat() {
    let {form, angkaSatu, angkaDua} = getValue();
    let total;
    if (isNaN(angkaSatu) || isNaN(angkaDua)) alert("Harap masukkan angka!!");
    else total  = Math.pow(angkaSatu, angkaDua);
    form.hasil.value = total;
}