<?php
require 'db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $score = isset($_POST['score']) ? intval($_POST['score']) : 0;
    $time = isset($_POST['time']) ? intval($_POST['time']) : 0;

    if (!empty($name) && $score >= 0) {
        try {
            $stmt = $pdo->prepare('INSERT INTO highscores (name, score, time) VALUES (?, ?, ?)');
            $stmt->execute([$name, $score, $time]);
            echo json_encode(['success' => true]);
        }
        catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to submit score']);
        }
    }
    else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid data']);
    }
}
else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>