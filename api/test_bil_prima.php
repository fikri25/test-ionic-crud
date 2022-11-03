<?php
    $nil_1 = 1 ;
    $nil_2 = 100;
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
    echo $hasnilai;
?>