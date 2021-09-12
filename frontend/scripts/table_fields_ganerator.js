const TOTAL_GAME_TABLE_SIDES_COUNT = 4;
const TOTAL_FIELD_ON_SIDE_COUNT = 8;

// css classes' names
const STANDARD_LINE_FIELD_STYLE_CLASS = "game-table-field-card";
const STANDARD_FIELD_TEXT_STYLE_CLASS = "game-table-field-text";

// html elements ids
const TABLE_FIELDS_BODY_DIV_ID = "game-table-field";

const gameTableDiv = document.getElementById(TABLE_FIELDS_BODY_DIV_ID)

for (var sideId = 0; sideId < TOTAL_GAME_TABLE_SIDES_COUNT; ++sideId) {
    for (var fieldOnSideId = 0; fieldOnSideId < TOTAL_FIELD_ON_SIDE_COUNT; ++fieldOnSideId) {
        const fieldUnderlineDiv = document.createElement('div');
        fieldUnderlineDiv.className = STANDARD_LINE_FIELD_STYLE_CLASS;

        const FieldIconDiv = document.createElement("h1");
        FieldIconDiv.innerText = "Game Table";
        FieldIconDiv.className = STANDARD_FIELD_TEXT_STYLE_CLASS;
        
        fieldUnderlineDiv.append(FieldIconDiv);
        gameTableDiv.append(fieldUnderlineDiv);
    }
}