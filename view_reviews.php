<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_management"; // Updated database name

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, email, message, submitted_at FROM reviews ORDER BY submitted_at DESC";
$result = $conn->query($sql);

echo "<h2>User Reviews</h2>";
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div style='border: 1px solid #ddd; padding: 10px; margin: 10px;'>";
        echo "<strong>" . htmlspecialchars($row['name']) . " (" . htmlspecialchars($row['email']) . ")</strong><br>";
        echo "<p>" . nl2br(htmlspecialchars($row['message'])) . "</p>";
        echo "<small>Submitted on: " . $row['submitted_at'] . "</small>";
        echo "</div>";
    }
} else {
    echo "No reviews yet!";
}

$conn->close();
?>
