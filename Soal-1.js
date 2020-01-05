function dataDiri(nama, umur) {
  let data = {
    nama: nama,
    umur: umur,
    hobi: ["Main Pabji", "Ngoding"],
    kemampuan: [
      {
        namaKemampuan: "Frontend",
        tingkatan: "Beginer"
      },
      {
        namaKemampuan: "Backend",
        tingkatan: "Medium"
      },
      {
        namaKemampuan: "Mobile",
        tingkatan: "Expert"
      }
    ],
    tertarikNgoding: true
  };

  let string = JSON.stringify(data);

  console.log(JSON.parse(string));
}

dataDiri("Arraihaan", 17);