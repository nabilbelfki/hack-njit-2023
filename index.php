<html>

<head>
    <title>
        Hack NJIT
    </title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="ship.js"></script>
    <link rel="stylesheet" href="ship.css">
    <link rel="icon" type="image/png" href="Images/hacknjit2023.png">
</head>

<body>
    <div class="container" id="container">
        <div class="row">
            <img id="hack-njit" src="Images/hacknjit2023.png" alt="Hack NJIT 2023">
        </div>
        <div class="row">
            <img id="super-sail" src="Images/Super Sail.png" alt="Super Sail">
        </div>
        <div class="row">
            <button id="start-game">Start Game</button>
        </div>
    </div>

    <div id="highscores-modal"
        style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.95); z-index:2000; flex-direction:column; align-items:center; justify-content:center;">
        <div class="row">
            <img id="hack-njit-hs" src="Images/hacknjit2023.png" alt="Hack NJIT 2023"
                style="width:150px; height:150px;">
        </div>
        <div class="row">
            <img id="super-sail-hs" src="Images/Super Sail.png" alt="Super Sail" style="width:400px; height:auto;">
        </div>

        <div id="game-over-section" style="text-align: center; display: none; margin-bottom: 20px;">
            <h1 style="font-size: 48px; color: #333; margin-top: 0; margin-bottom: 10px;">GAME OVER</h1>
            <p style="font-size: 24px; margin: 5px 0;">Score: <span id="final-score" style="font-weight: bold;">0</span>
            </p>
            <p style="font-size: 24px; margin: 5px 0 15px 0;">Time: <span id="final-time"
                    style="font-weight: bold;">00:00:00</span></p>
            <input type="text" id="player-name" placeholder="Enter your name"
                style="padding: 10px; font-size: 18px; border-radius: 5px; border: 1px solid #ccc; margin-bottom: 10px; text-align: center; width: 250px;"><br>
            <button id="submit-score"
                style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; font-size: 16px; cursor: pointer; border-radius: 5px;">Save
                Score</button>
        </div>

        <h2 id="highscores-title">Highscores</h2>
        <div id="highscores-container"
            style="max-height: 300px; overflow-y: auto; width: 100%; display: none; justify-content: center; margin-bottom: 20px;">
            <table id="highscores-table"
                style="margin: 0 auto; border-collapse: collapse; min-width: 500px; text-align: left; font-size: 18px;">
                <thead
                    style="position: sticky; top: 0; z-index: 1; font-family: 'Courier New', monospace; font-weight: bold;">
                    <tr style="background-color: #f2f2f2;">
                        <th style="padding: 10px; border-bottom: 2px solid #ddd;">Rank</th>
                        <th style="padding: 10px; border-bottom: 2px solid #ddd;">Name</th>
                        <th style="padding: 10px; border-bottom: 2px solid #ddd;">Score</th>
                        <th style="padding: 10px; border-bottom: 2px solid #ddd;">Time</th>
                    </tr>
                </thead>
                <tbody id="highscores-list">
                    <!-- Data will be populated here -->
                </tbody>
            </table>
        </div>
        <br>
        <button id="restart-game"
            style="background-color: #4CAF50; border: none; display: none; color: white; padding: 15px 32px; text-align: center; font-size: 16px; cursor: pointer; border-radius: 5px;">Play
            Again</button>
    </div>

    <div id="scoreboard">0</div>
    <div id="timeboard">00:00:00</div>

    <!-- Rocks -->
    <img class="rocks" id="rock-1" src="Images/Rock One.png" alt="Three circular rocks">
    <img class="rocks" id="rock-2" src="Images/Rock Two.png" alt="An elongated rock">

    <!-- Clouds -->
    <img class="clouds" id="cloud-1" src="Images/Cloud One.png" alt="A thick cloud">
    <img class="clouds" id="cloud-2" src="Images/Cloud Two.png" alt="A small cloud">
    <img class="clouds" id="cloud-3" src="Images/Cloud Three.png" alt="low flying nimbus cloud">

    <!-- Ship -->
    <img id="ship" src="Images/Ship.png" alt="ship with containers">

    <!-- Force Field -->
    <img id="force-field" src="Images/Force Field 2.png" alt="force field">

    <!-- Coin -->
    <img id="coin" src="Images/Coin.png" alt="coin with dollar sign">

    <!-- Orb -->
    <img id="orb" src="Images/Orb.png" alt="orb for force field">

    <!-- Hearts -->
    <img id="heart-1" src="Images/Heart.png" alt="heart for lives">
    <img id="heart-2" src="Images/Heart.png" alt="heart for lives">
    <img id="heart-3" src="Images/Heart.png" alt="heart for lives">

    <!-- Explosion -->
    <img id="explosion" src="Images/Explosion Three.gif">

    <!-- Enemy -->
    <img id="gear" src="Images/Spinner.png" alt="spinner with spikes, be careful this could destroy your ship">

    <!-- Enemy Health Status -->
    <img class="health" id="health-5" src="Images/HealthFive.png" alt="100% health">
    <img class="health" id="health-4" src="Images/HealthFour.png" alt="80% health">
    <img class="health" id="health-3" src="Images/HealthThree.png" alt="60% health">
    <img class="health" id="health-2" src="Images/HealthTwo.png" alt="40% health">
    <img class="health" id="health-1" src="Images/HealthOne.png" alt="20% health">
</body>

</html>

</html>

</html>

</html>

</html>

</html>

</html>

</html>