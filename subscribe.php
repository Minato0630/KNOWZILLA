<?php
$servername = "localhost"; // Change if needed
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "user_management"; // Updated database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);

    // Check if email is empty
    if (empty($email)) {
        header("Location: about.html?error=empty_email");
        exit();
    }

    // Insert into database
    $sql = "INSERT INTO subscriptions (email) VALUES ('$email')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to about.html with success message
        header("Location: about.html?success=1");
        exit();
    } else {
        // If email already exists, prevent duplicate subscription
        if ($conn->errno == 1062) {
            header("Location: about.html?error=duplicate_email");
        } else {
            header("Location: about.html?error=unknown");
        }
        exit();
    }
}

// Close connection
$conn->close();
?>
