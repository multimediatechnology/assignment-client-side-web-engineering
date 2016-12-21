<?php  
$current_url = "pages" . $_SERVER['REQUEST_URI'] . ".php";
include_once "structure/head.php";
?> <section class="section"> <?php 
include_once "structure/menu.php";
?> <div class="container"> <?php 
if ($_SERVER['REQUEST_URI'] == "/") {
	include "pages/start.php";
} else {
	include $current_url;
}
?> </div> <?php 
?> </section> <?php 
include_once "structure/footer.php";

