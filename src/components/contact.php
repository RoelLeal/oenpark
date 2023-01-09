<?php
  if (isset($_POST['name']))
    $name = $_POST['name'];

  if (isset($_POST['email']))
    $email = $_POST['email'];

  if (isset($_POST['message']))
    $message = $_POST['message'];

  if (isset($_POST['subject']))
    $subject = $_POST['subject'];

  if ($name === '') {
    echo "El nombre no puede estar vacio";
    die();
  }
  if ($email === '') {
    echo "El email no puede estar vacio";
    die();
  } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "El email no puede estar vacio";
      die();
    }
  }
  if ($subject === '') {
    echo "El titulo no puede estar vacio";
    die();
  }
  if ($message === '') {
    echo "El mensaje no puede estar vacio";
    die();
  }
  
  $content = "From: $name \nEmail: $email \nMessage: $message";
  $recipient = "comercial@oenpark.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  header("Location: contact.js")
?>