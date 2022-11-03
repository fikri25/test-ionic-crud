<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
// print_r($data);exit;
$pesan = [];
$nil_awal = $data['nil_awal'];
$nil_akhir = $data['nil_akhir'];
$id = $data['id'];

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

$query = mysqli_query($koneksi,"update test_crud set nil_awal='$nil_awal',nil_akhir='$nil_akhir',hasil='$hasnilai' where id='$id'");


echo json_encode($pesan);
echo mysqli_error($koneksi);


?>