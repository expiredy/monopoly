const TOTAL_GAME_FIELD_SIDES_COUNT = 4;
const TOTAL_BOX_ON_SIDE_COUNT = 8;
const MAIN_BOX_STYLE_CLASS_NAME = "someCssClassName"

const gameFieldDiv = document.createElement('div');
for (var sideId = 0; sideId < TOTAL_GAME_FIELD_SIDES_COUNT; ++sideId) {
    const gameFieldSideDiv = document.createElement('div');
    for (var boxOnSideId = 0; boxOnSideId < TOTAL_BOX_ON_SIDE_COUNT; ++boxOnSideId) {
        const boxUnderlineDiv = document.createElement('div');
        // boxUnderlineDiv.className = MAIN_BOX_STYLE_CLASS_NAME;
        const boxIconDiv = document.createElement("h1") 
        boxIconDiv.innerText = "Game Field";
        boxUnderlineDiv.append(boxIconDiv);
        gameFieldSideDiv.append(boxUnderlineDiv);
    }
    gameFieldDiv.append(gameFieldSideDiv);
}
console.log(gameFieldDiv );
document.body.append(gameFieldDiv);