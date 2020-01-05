<?php
     function usernameValid($username) {
          return preg_match('/^[aiueo]{3}[a-z0-9]{2,7}$/i',$username) ;
     }
   
     // Cara menggunakan fungsi di atas
     if (usernameValid("Arraihaan")) {
         echo "Username Benar" ;
     } else {
         echo "Username Mengandung Huruf Besar" ;
     }
?>

<?php
function passwordValid($password){
	$minVal = strlen($password) == 8;
	$kapVal = preg_match('/[A-Z]/',$password);
	$lowVal = preg_match('/[a-z]/',$password);
	$specVal = preg_match('/[~!@#$%^&*]/',$password);
    
	if ($minVal && $kapVal && $lowVal && $specVal) {
		echo "Password ok";
	}else{
		echo "Password harus minimal berjumlah 8 karakter dan harus mengandung huruf besar huruf kecil dan karakter spesial";
	}
}
$pass = "Raihan!@";
passwordValid($pass);
