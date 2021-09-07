const TOTAL_GAME_TABLE_SIDES_COUNT = 4;
const TOTAL_FIELD_ON_SIDE_COUNT = 8;
const MAIN_FIELD_STYLE_CLASS_NAME = "someCssClassName"

const gameTableDiv = document.createElement('div');
т
for (var sideId = 0; sideId < TOTAL_GAME_Table_SIDES_COUNT; ++sideId) {
    const gameTableSideDiv = document.createElement('div');
    for (var FieldOnSideId = 0; FieldOnSideId < TOTAL_Field_ON_SIDE_COUNT; ++FieldOnSideId) {
        const FieldUnderlineDiv = document.createElement('div');
        // FieldUnderlineDiv.className = MAIN_Field_STYLE_CLASS_NAME;
        const FieldIconDiv = document.createElement("h1") 
        FieldIconDiv.innerText = "Game Table";
        FieldUnderlineDiv.append(FieldIconDiv);
        gameTableSideDiv.append(FieldUnderlineDiv);
    }
    gameTableDiv.append(gameTableSideDiv);
}
console.log(gameTableDiv );
document.body.append(gameTableDiv);