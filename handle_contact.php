<?php
$servername = "localhost"; // Change if needed
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "user_management"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);

    // Check if required fields are empty
    if (empty($name) || empty($email) || empty($message)) {
        header("Location: contact.html?error=empty_fields");
        exit();
    }

    // Insert into database
    $sql = "INSERT INTO contact (name, phone, email, message) VALUES ('$name', '$phone', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to contact.html with success message
        header("Location: contact.html?success=1");
        exit();
    } else {
        header("Location: contact.html?error=unknown");
        exit();
    }
}

// Close connection
$conn->close();
?>
