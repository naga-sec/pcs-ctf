// brankas v0.3
// potongan kedua pesan terenkripsi
const SECRET_PART_2 = "596e417559324e755a6d647564576f755a323531634338764f6d5a6a5a326431";

document.getElementById("part2").textContent = SECRET_PART_2.slice(0, 12) + "... (terpotong, baca skrip ini)";

document.getElementById("auto").onclick = () => {
  document.getElementById("e").textContent = "Dekoder dimatikan admin. Selesaikan manual.";
};
