<?php
mysql_connect("localhost","root","");
mysql_select_db("test_blob1");
$id=$_GET["id"];
mysql_query("delete from table1 where id=$id");
?>


<script type="text/javascript">
window.location ="index.php";
</script>