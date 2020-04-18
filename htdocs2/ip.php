<?php 
      $ip1 = $_SERVER['REMOTE_ADDR'];
      $ip2 = $_SERVER['HTTP_X_FORWARDED_FOR']; 
      $puerto = $_SERVER['REMOTE_PORT'];
       
      $dt = date("l jS \of F Y h:i:s A"); 
      $file=fopen("ip_log.txt","a"); 
 
      fwrite($file, "-------------------------------".PHP_EOL); 
      fwrite($file, "\n Puerto:".$puerto.PHP_EOL);
      fwrite($file, "\n REMOTE_ADDR:".$ip1." - Proxy_IP:".$ip2.PHP_EOL);
      fwrite($file, "\n(".$dt.")".PHP_EOL);  
      fwrite($file, "-------------------------------".PHP_EOL);
      fclose($file);
?>
