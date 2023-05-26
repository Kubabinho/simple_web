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
//connect to database
$connection = @mysqli_connect('localhost', 'root', '', 'ksiegarnia')
or die('No connection do database');
mysqli_query($connection, "SET CHARSET utf8");
mysqli_query($connection, "SET NAMES `utf8` COLLATE `utf8_polish_ci`");
/* zapytanie do konkretnej tabeli */
$result = mysqli_query($connection, "SELECT * FROM epics")
or die('Error');
if(mysqli_num_rows($result) > 0) {
/*if result is positive, show data*/
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
<input type="button" value="Add_position" href="javascript:void(0)" onclick="parent.table.location.href = 'epics_form.php'; return false"/>
</div>
</center>