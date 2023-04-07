
PHP Code (submit.php):

```php
<?php
  $name = $_POST['name'];
  $age = $_POST['age'];
  $gender = $_POST['gender'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $photo = $_FILES['photo'];

  $targetDir = 'uploads/';
  $targetFile = $targetDir . basename($photo['name']);
  $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

  $allowedTypes = array('jpg', 'jpeg', 'png', 'gif');
  
  if (in_array($imageFileType, $allowedTypes)) {
    if (move_uploaded_file($photo['tmp_name'], $targetFile)) {
      $message = 'Your form has been submitted successfully';
    } else {
      $message = 'Sorry, there was an error uploading your photo';
    }
  } else {
    $message = 'Sorry, only JPG, JPEG, PNG & GIF files are allowed';
  }

  $response = array(
    'message' => $message
  );

  echo json_encode($response);
?>
