<?php
session_start();

// Database connection
$host = 'localhost'; // Your database host
$db = 'user_management'; // Your database name
$user = 'root'; // Your database username
$pass = ''; // Your database password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle signup
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['signup'])) {
    $name = $_POST['name'];
    $registration_no = $_POST['registration_no'];
    $email = $_POST['email'];
    $phone_no = $_POST['phone_no'];
    $class = $_POST['class'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Check if registration number already exists
    $checkSql = "SELECT * FROM users WHERE registration_no = ?";
    $checkStmt = $conn->prepare($checkSql);
    $checkStmt->bind_param("s", $registration_no);
    $checkStmt->execute();
    $checkResult = $checkStmt->get_result();

    if ($checkResult->num_rows > 0) {
        echo "Registration number already exists. Please use a different one.";
    } else {
        $sql = "INSERT INTO users (name, registration_no, email, phone_no, class, password) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssss", $name, $registration_no, $email, $phone_no, $class, $password);

        if ($stmt->execute()) {
            $_SESSION['username'] = $name; // Store username in session
            header("Location: index.html"); // Redirect to the index page
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    }
    $checkStmt->close();
}

// Handle login
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['login'])) {
    $registration_no = $_POST['registration_no'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE registration_no = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $registration_no);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['name']; // Store username in session
            header("Location: index.html"); // Redirect to the index page
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found with that registration number.";
    }
    $stmt->close();
}

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: login.html"); // Redirect to the login page
    exit();
}
?>