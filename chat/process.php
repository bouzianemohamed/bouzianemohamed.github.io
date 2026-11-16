<?php

    $function = $_POST['function'];
	$file = 'chat.txt';
    $log = array();

	switch($function) {
    	 case('getState'):
        	 if(file_exists($file)){
               $lines = file($file);
        	 }
             $log['state'] = count($lines); 
        	 break;	
    	
    	 case('update'):
        	$state = $_POST['state'];
        	if(file_exists($file)){
        	   $lines = file($file);
        	 }
        	 $count =  count($lines);
        	 if($state == $count){
        		 $log['state'] = $state;
        		 $log['text'] = false;
        		 
        		 }
        		 else{
        			 $text= array();
        			 $log['state'] = $state + count($lines) - $state;
        			 foreach ($lines as $line_num => $line)
                       {
        				   if($line_num >= $state){
                         $text[] =  $line = str_replace("\n", "", $line);
        				   }
                        }
        			 $log['text'] = $text; 
        		 }
             break;
    	 case('send'):
		  $nickname = htmlentities(strip_tags($_POST['nickname']));
			 $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
			  /* $message = htmlentities(strip_tags($_POST['message'])); */
			  $message = htmlentities(($_POST['message']));
		 if(($message) != "\n"){
			 if(preg_match($reg_exUrl, $message, $url)) {
       			$message = preg_replace($reg_exUrl, '<a href="'.$url[0].'" target="_blank">'.$url[0].'</a>', $message);
				} 
       			$message = str_replace("[img", "<img", $message);
       			$message = str_replace('/]', '/>', $message);
        	 fwrite(fopen($file, 'a'), "<span>". $nickname . " <i>". date("Y/m/d H:i:s")  ."</i></span>" . $message = str_replace("\n", " ", $message). "" . "\n"); 
		 }
        	 break;
    }
    echo json_encode($log);
?>