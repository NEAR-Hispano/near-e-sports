use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen, setup_alloc};
use serde::Serialize;
use serde::Deserialize;
use near_sdk::collections::LookupMap;
use near_sdk::collections::UnorderedMap;
use near_sdk::collections::Vector;

setup_alloc!();

//------------------------------------------------- OBJETOS---------------------------------------

//Usuario 
#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct User{
    name: String,
    profile-description: String,
    tournaments: Vec<Tournament>
    teams: Vec<Team>
}

//Torneos
#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Tournament{
    name: String,
    description: String,
    creator: String,
    date:u64,
    teams: Vec<Team>
    winner:String,
    prize:u32
}
// Equipos
#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Team{
    name: String,
    integrants: Vec<User>,
    tournaments: Vec<Tournament>


// Entrada torneo    
#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct pass{
    passid: String,
    user: String,
    tournament: Vec<Tournament>
