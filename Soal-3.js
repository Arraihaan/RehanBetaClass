let buatSegitiga = (tabel) => {
  
    for(let baris = 1; baris <= tabel; baris++){
      let hasil = '';
      
      //Add the white space to the left
      for(let Spasi = 1; Spasi <= (tabel - baris); Spasi++){
        hasil += ' ';
      }
      
      //Add the '*' for each row
      for(let kolom = 0; kolom != (2 * baris - 1); kolom++){
        hasil += '*';
      }
      
      //Add the white space to the right
      for(let Spasi =  baris + 1; Spasi <= tabel; Spasi++){
        hasil += ' ';
      }
      
       //Print the pyramid pattern for each row
      console.log(hasil);
    }
 }
 
buatSegitiga(3);