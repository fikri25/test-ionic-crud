<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$nil_awal = trim($data['nil_awal']);
$nil_akhir = trim($data['nil_akhir']);

// hitung bilangan prima
$nil_1 = $nil_awal ;
$nil_2 = $nil_akhir;
$hasil = array();
for ($i=$nil_1; $i <= $nil_2 ; $i++) { 
    $t = 0;
       
    for ($j=1; $j <= $i ; $j++) {
        if ($i % $j == 0) {
            $t++;
        }
    }

    if ($t == 2) { 
         $hasil[] = $i;
    }

        
}

$hasnilai =  implode(", ",$hasil);
// end-----

if ($nil_awal != '' and $nil_akhir != '') {
	$query = mysqli_query($koneksi,"insert into test_crud(nil_awal,nil_akhir,hasil) values('$nil_awal','$nil_akhir','$hasnilai')");

}else{
	$query = mysqli_query($koneksi,"delete from test_crud where id='$id'");
}


echo json_encode($pesan);
echo mysqli_error($koneksi);

?>