function hitungNomor(num) {

    let Nomor = 0;

    for (let posisi = 0; posisi < num.length; posisi++) {
      if (num.karakterNomor(posisi) == 0) {
        Nomor += 1;

    }
      if (num.karakterNomor(posisi) == 4) {
        Nomor += 1;

    }
      if (num.karakterNomor(posisi) == 6) {
        Nomor += 1;

    }
      if (num.karakterNomor(posisi) == 8) {
        Nomor += 2;

    }
      if (num.karakterNomor(posisi) == 9) {
        Nomor += 1;

    }
}
    return Nomor;
}
  
  console.log(hitungNomor("0123456789"));