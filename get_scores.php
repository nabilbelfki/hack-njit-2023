<?php
require 'db.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query('SELECT name, score, time FROM highscores ORDER BY score DESC, time ASC LIMIT 10');
    $scores = $stmt->fetchAll();
    echo json_encode($scores);
}
catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch highscores']);
}
?>