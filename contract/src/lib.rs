
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{ env, near_bindgen, AccountId, Balance, CryptoHash, PanicOnDefault, Promise, PromiseOrValue, BorshStorageKey };
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::collections::UnorderedMap;
use near_sdk::collections::Vector;
use near_sdk::collections::LazyOption;
use std::collections::HashMap;
use near_sdk::metadata;
use near_sdk::Gas;
use near_sdk::json_types::ValidAccountId;
use near_sdk::json_types::U128;
use near_sdk::collections::UnorderedSet;
near_sdk::setup_alloc!();

/// This spec can be treated like a version of the standard.
pub const NFT_METADATA_SPEC: &str = "1.0.0";
/// This is the name of the NFT standard we're using
pub const NFT_STANDARD_NAME: &str = "nep171";

pub type TokenSeriesId = String;
pub const TOKEN_DELIMETER: char = ':';
pub const TITLE_DELIMETER: &str = " #";
pub const VAULT_FEE: u128 = 500;

const GAS_FOR_RESOLVE_TRANSFER: Gas = 10_000_000_000_000;
const NO_DEPOSIT: Balance = 0;
const MAX_PRICE: Balance = 1_000_000_000 * 10u128.pow(24);





//Usuario 
#[derive(Serialize, Deserialize , BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct User{
    name: String,
    profiledescription: String
    //crear otra estructura de juegos 
}

//Torneos
#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize )]
#[serde(crate = "near_sdk::serde")]
pub struct Tournament{
    name: String,
    index: i128,
    firebase_index:String,
    description: String,
    date: String,
    winner: String,
    cost:String,
    active:bool,
    teams: Vec<Team>,

}
// Equipos
#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize )]
#[serde(crate = "near_sdk::serde")]
pub struct Team{
    name: String,
    index: i128,
    user1: String,
    user2: String,
    user3: String,
    user4: String,
    user5: String,

}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    vault_id: AccountId,
    tournament_list: UnorderedMap<i128, Tournament>,
    teams_list: UnorderedMap<i128, Team>
}

#[derive(BorshSerialize, BorshStorageKey)]
pub enum StorageKey {
   
    Tournaments,
    Teams
   
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new(owner_id: ValidAccountId, vault_id: ValidAccountId) -> Self {
        assert!(!env::state_exists(), "Already initialized");
        Self {
            vault_id: vault_id.to_string(),
            tournament_list: UnorderedMap::new(StorageKey::Tournaments),
            teams_list:UnorderedMap::new(StorageKey::Teams)
            
        }
    }

    // Crear torneo
    pub fn create_tournament(&mut self,
        name: String,
        description: String,
        date:String,
        winner: String,
        cost:String,
        teams:Vec<Team>,
        firebase_index:String

        ) -> Tournament {
        
        let initial_storage_usage = env::storage_usage();
        let caller = env::signer_account_id();
        let index = i128::from(self.tournament_list.len() + 1);
        let tournament = Tournament {
            name: name,
            description: description,
            date:date,
            index: index,
            winner: winner,
            cost:cost,
            teams:teams,
            active:true,
            firebase_index:firebase_index

        };
        self.tournament_list.insert(&tournament.index, &tournament);
        
        tournament
    }


    pub fn create_team(&mut self,
        name: String,
        user1: String,
        user2: String,
        user3: String,
        user4: String,
        user5: String,

        ) -> Team {
        
        let initial_storage_usage = env::storage_usage();
        let caller = env::signer_account_id();
        let index = i128::from(self.teams_list.len() + 1);

        let team = Team {
            name: name,
            index: index,
            user1: user1,
            user2: user2,
            user3: user3,
            user4: user4,
            user5: user5,
        };
        self.teams_list.insert(&team.index, &team);

        team
    }
    pub fn get_tournaments(self) -> Vec<Tournament> {
        let tournament_list = self.tournament_list.values_as_vector().to_vec();
        tournament_list
    }

    pub fn join_tournament(
        &mut self,
        name:String,
        user1:String,
        user2:String,
        user3:String,
        user4:String,
        user5:String,
        index_tournament: i128
    ) {
        let team = Team {
            name: name,
            index: 1,
            user1: user1,
            user2: user2,
            user3: user3,
            user4: user4,
            user5: user5,
        };
        //validar que no existe un equipo con ese nombre
        let mut tournament = self.tournament_list.get(&index_tournament).expect("Tournament does not Exist");
        tournament.teams.push(team)
    }
}



 
