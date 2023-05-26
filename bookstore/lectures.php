<center>
<div class="table">
<table class="table1" border='2'>
<tr>
<th class="td_id">ID</td>
<th class="td_title">Title</td>
<th class="td_author">Autor</td>
<th class="td_availability">Availability</td>
</tr>
<?php
//conntect to database
$connection = @mysqli_connect('localhost', 'root', '', 'bookstore')
or die('Problem with connection to MySQL');
mysqli_query($connection, "SET CHARSET utf8");
mysqli_query($connection, "SET NAMES `utf8` COLLATE `utf8_polish_ci`");

$result = mysqli_query($connection, "SELECT * FROM lectures")
or die('Error');
if(mysqli_num_rows($result) > 0) {
/*show data if result is positive */
while($r = mysqli_fetch_assoc($result)) {
echo "<tr>";
echo "<td class=td_bottom>".$r['ID']."</td>";
echo "<td class=td_bottom>".$r['title']."</td>";
echo "<td class=td_bottom>".$r['author']."</td>";
echo "<td class=td_bottom>".$r['availability']."</td>";
echo "</tr>";
}
}
?>
</table>
<input type="button" value="Add position" href="javascript:void(0)" onclick="parent.table.location.href = 'lectures_form.php'; return false"/>
</div>
</center>