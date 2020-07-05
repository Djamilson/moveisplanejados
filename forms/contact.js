if (
  file_exists(
    ($php_email_form = "../assets/vendor/email-form/email-form.php")
  )
) {
  include($php_email_form);
} else {
  die('Unable to load the "PHP Email Form" Library!');
}
