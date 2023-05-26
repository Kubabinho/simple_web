<h1>Adding book to epics</h1>
    <form action="epics_form.php" method="post">
      <input type="text" name="ID" /> ID<br /><br />
      <input type="text" name="author" /> Autor<br /><br />
      <input type="text" name="title" /> Title<br /><br />
      Book avaiilibity:
      <input type="radio" name="availability" value="available" /> Available
      <input type="radio" name="availability" value="unavailable" /> Unavailable<br /><br />
      <input type="submit" name="add" value="Add" />
    </form>

<?php
      $ID = trim($_POST['ID']);
      $author = trim($_POST['author']);
      $title = trim($_POST['title']);
      $availability = trim($_POST['availability']);
      if (!$ID || !$author || !$title || !$availability)
      {
        echo 'not all data is submited, try again';
        exit;
      }
      if (!get_magic_quotes_gpc())
      {
        $ID = addslashes($ID);
        $author = addslashes($author);
        $title = addslashes($title);
        $availability = addslashes($availability);
      }
      @ $db = new mysqli('localhost','root','','bookstore');
      
      if (mysqli_connect_errno())
      {
        echo 'There is a problem with connection to database. Try again';
        exit;
      }
      $db->query('SET NAMES utf8');
      $db->query('SET CHARACTER_SET utf8_unicode_ci');
      $inquiry = "insert into powiesci values ('".$ID."', '".$author."', '".$title."', '".$availability."')";
      $result = $db->query($inquiry);
      if ($result) echo 'Number of book added to bookstore:'.$db->affected_rows;
    ?> 