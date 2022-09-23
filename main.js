let dataBody = document.getElementById("dataGempa");

class Gempa {
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak() {
        if (this.skala > 0 && this.skala <= 2) return "tidak terasa";
        else if (this.skala > 2 && this.skala <= 4) return "bangunan retak - retak";
        else if (this.skala > 4 && this.skala <= 6) return "bangunan roboh";
        else if (this.skala > 6) return "bangunan roboh dan berpotensi tsunami";
    }
}

const g1 = new Gempa('Palembang', 5); 
const g2 = new Gempa('Medan', 7);
const g3 = new Gempa('Lombok', 6);
const g4 = new Gempa('Bandung', 3.4);
const g5 = new Gempa('Malang', 9);
const g6 = new Gempa('Pontianak', 8.2);
const g7 = new Gempa('Gorontalo', 5.2);
const g8 = new Gempa('Tidore', 3.7); 
const g9 = new Gempa('Banten', 4);
const g10 = new Gempa('Bali', 1.2);

const arrGempa = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

let number = 1;
for (const data of arrGempa) {
    const warna = number % 2 == 1 ? "brown" : "darkseagreen";
    dataBody.innerHTML += `
        <tr bgcolor=${warna}>
            <td>${number++}</td>
            <td>${data.lokasi}</td>
            <td>${data.skala}</td>
            <td>${data.dampak()}</td>
        </tr>`;
}