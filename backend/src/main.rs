#[macro_use] extern crate rocket;

extern crate serde;
extern crate serde_json;

use serde::Deserialize;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "PascalCase")]
struct Person {
    first_name: String,
    last_name: String,
    phone_numbers: Vec<String>,
}


#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/create-session/<user_id>")]
fn create_session(user_id: String) -> &'static str{
    let the_file = r#"{
        "FirstName": "John",
        "LastName": "Doe",
        "Age": 43,
        "Address": {
            "Street": "Downing Street 10",
            "City": "London",
            "Country": "Great Britain"
        },
        "PhoneNumbers": [
            "+44 1234567",
            "+44 2345678"
        ]
    }"#;
        let person: Person = serde_json::from_str(the_file).expect("JSON was not well-formatted");
    return the_file;
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, create_session])
}