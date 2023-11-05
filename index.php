<html>
    <head>
        <title>
            Hack NJIT
        </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="ship.js"></script>
        <link rel="stylesheet" href="ship.css">
    </head>
    <body>
        <div id="scoreboard">0</div>
        <div id="gameover" style="display:none"><h1>GAME OVER</h1></div>

        <!-- Rocks -->
        <img class="rocks" id="rock-1" src="Images/Rock One.png" alt="Three circular rocks">
        <img class="rocks" id="rock-2" src="Images/Rock Two.png" alt="An elongated rock">
        <img class="rocks" id="rock-3" src="Images/Rock Three.png" alt="Little white rock">
        
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
