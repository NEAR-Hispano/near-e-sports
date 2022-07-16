use std::collections::HashMap;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};
use near_sdk::json_types::{Base64VecU8, U128};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{
    env, near_bindgen, AccountId, Balance, CryptoHash, PanicOnDefault, Promise, PromiseOrValue,
};
use near_sdk::Gas;
use near_sdk::BorshStorageKey;

use crate::internal::*;
pub use crate::metadata::*;
pub use crate::mint::*;
pub use crate::nft_core::*;
pub use crate::approval::*;
pub use crate::royalty::*;
pub use crate::events::*;

mod internal;
mod approval; 
mod enumeration; 
mod metadata; 
mod mint; 
mod nft_core; 
mod royalty; 
mod events;

/// This spec can be treated like a version of the standard.
pub const NFT_METADATA_SPEC: &str = "nft-1.0.0";
/// This is the name of the NFT standard we're using
pub const NFT_STANDARD_NAME: &str = "nep171";

pub type TokenSeriesId = String;
pub const TOKEN_DELIMETER: char = ':';
pub const TITLE_DELIMETER: &str = " #";
pub const VAULT_FEE: u128 = 500;
pub type Price = f64;


const NO_DEPOSIT: Balance = 0;
const MAX_PRICE: Balance = 1_000_000_000 * 10u128.pow(24);
const YOCTO_NEAR: u128 = 1_000_000_000_000_000_000_000_000; // 1 followed by 24 zeros
const ONE_YOCTO: u128 = 1;
const STORAGE_PRICE_PER_BYTE: Balance = 10_000_000_000_000_000_000;  // source of this number: https://docs.near.org/docs/concepts/storage-staking



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
    owner: String,
    user1: String,
    user2: String,
    user3: String,
    user4: String,
    user5: String,
    idteam: String,

}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    //contract owner
    pub owner_id: AccountId,

    //keeps track of all the token IDs for a given account
    pub tokens_per_owner: LookupMap<AccountId, UnorderedSet<TokenId>>,

    //keeps track of the token struct for a given token ID
    pub tokens_by_id: LookupMap<TokenId, Token>,

    //keeps track of the token metadata for a given token ID
    pub token_metadata_by_id: UnorderedMap<TokenId, TokenMetadata>,

    //keeps track of the metadata for the contract
    pub metadata: LazyOption<NFTContractMetadata>,

    tournament_list: UnorderedMap<i128, Tournament>,
    teams_list: UnorderedMap<i128, Team>,
}

/// Helper structure for keys of the persistent collections.
#[derive(BorshSerialize, BorshStorageKey)]
pub enum StorageKey {
    TokensPerOwner,
    TokenPerOwnerInner { account_id_hash: CryptoHash },
    TokensById,
    TokenMetadataById,
    NFTContractMetadata,
    TokensPerType,
    TokensPerTypeInner { token_type_hash: CryptoHash },
    TokenTypesLocked,
    Tournaments,
    Teams,
}

#[near_bindgen]
impl Contract {
   
    #[init]
    pub fn new_default_meta(owner_id: AccountId) -> Self {
        //calls the other function "new: with some default metadata and the owner_id passed in 
        Self::new(
            owner_id,
            NFTContractMetadata {
                spec: "nft-1.0.0".to_string(),
                name: "NFT Nears Esports Tournaments".to_string(),
                symbol: "NET".to_string(),
                icon: None,
                base_uri: None,
                reference: None,
                reference_hash: None,
            },
        )
    }


    #[init]
    pub fn new(owner_id: AccountId, metadata: NFTContractMetadata) -> Self {
        //create a variable of type Self with all the fields initialized. 

        let this = Self {
            tournament_list: UnorderedMap::new(StorageKey::Tournaments),
            teams_list:UnorderedMap::new(StorageKey::Teams),
            tokens_per_owner: LookupMap::new(StorageKey::TokensPerOwner.try_to_vec().unwrap()),
            tokens_by_id: LookupMap::new(StorageKey::TokensById.try_to_vec().unwrap()),
            token_metadata_by_id: UnorderedMap::new(
                StorageKey::TokenMetadataById.try_to_vec().unwrap(),
            ),
            //set the owner_id field equal to the passed in owner_id. 
            owner_id,
            metadata: LazyOption::new(
                StorageKey::NFTContractMetadata.try_to_vec().unwrap(),
                Some(&metadata),
            ),
            

        };

        this

        //return the Contract object
     
    }

    pub fn create_tournament(&mut self,
        name: String,
        description: String,
        date:String,
        winner: String,
        cost:String,
        teams:Vec<Team>,

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

        };
        self.tournament_list.insert(&tournament.index, &tournament);
        
        tournament
    }


    
    pub fn get_tournaments(self) -> Vec<Tournament> {
        let tournament_list = self.tournament_list.values_as_vector().to_vec();
        tournament_list
    }

    pub fn get_teams_bytournament(self,index:i128) -> Tournament {

        let mut tournament = self.tournament_list.get(&index).expect("Tournament does not Exist");
        tournament

    }

 /*   pub fn get_unordered_map(&self, key: String) -> String {
        match self.unordered_map.get(&key) {
            Some(value) => {
                let log_message = format!("Value from UnorderedMap is {:?}", value.clone());
                env::log(log_message.as_bytes());
                value
            },
            // None => "Didn't find that key.".to_string()
            None => "not found".to_string()
        }
    }
*/  
    #[payable]
    pub fn join_tournament(
        &mut self,
        token_id: TokenId,
        metadata: TokenMetadata,
        receiver_id: AccountId,
        perpetual_royalties: Option<HashMap<AccountId, u32>>,
        name:String,
        owner:String,
        user1:String,
        user2:String,
        user3:String,
        user4:String,
        user5:String,
        index:i128,
        idteam: String,
        
    ) {
        let team = Team {
            name: name,
            owner: owner,
            user1: user1,
            user2: user2,
            user3: user3,
            user4: user4,
            user5: user5,
            idteam: idteam,
        };
        //validar que no existe un equipo con ese nombre
        let mut tournament = self.tournament_list.get(&index).expect("Tournament does not Exist");

        tournament.teams.push(team);

        self.tournament_list.insert(&tournament.index, &tournament);

        let initial_storage_usage = env::storage_usage();

        // create a royalty map to store in the token
        let mut royalty = HashMap::new();

        // if perpetual royalties were passed into the function: 
        if let Some(perpetual_royalties) = perpetual_royalties {
            //make sure that the length of the perpetual royalties is below 7 since we won't have enough GAS to pay out that many people
            assert!(perpetual_royalties.len() < 7, "Cannot add more than 6 perpetual royalty amounts");

            //iterate through the perpetual royalties and insert the account and amount in the royalty map
            for (account, amount) in perpetual_royalties {
                royalty.insert(account, amount);
            }
        }

        //specify the token struct that contains the owner ID 
        let token = Token {
            //set the owner ID equal to the receiver ID passed into the function
            owner_id: receiver_id,
            //we set the approved account IDs to the default value (an empty map)
            approved_account_ids: Default::default(),
            //the next approval ID is set to 0
            next_approval_id: 0,
            //the map of perpetual royalties for the token (The owner will get 100% - total perpetual royalties)
            royalty,
        };

        //insert the token ID and token struct and make sure that the token doesn't exist
        assert!(
            self.tokens_by_id.insert(&token_id, &token).is_none(),
            "Token already exists"
        );

        //insert the token ID and metadata
        self.token_metadata_by_id.insert(&token_id, &metadata);

        //call the internal method for adding the token to the owner
        self.internal_add_token_to_owner(&token.owner_id, &token_id);

        // Construct the mint log as per the events standard.
        let nft_mint_log: EventLog = EventLog {
            // Standard name ("nep171").
            standard: NFT_STANDARD_NAME.to_string(),
            // Version of the standard ("nft-1.0.0").
            version: NFT_METADATA_SPEC.to_string(),
            // The data related with the event stored in a vector.
            event: EventLogVariant::NftMint(vec![NftMintLog {
                // Owner of the token.
                owner_id: token.owner_id.to_string(),
                // Vector of token IDs that were minted.
                token_ids: vec![token_id.to_string()],
                // An optional memo to include.
                memo: None,
            }]),
        };

        // Log the serialized json.
        env::log_str(&nft_mint_log.to_string());

        //calculate the required storage which was the used - initial
        let required_storage_in_bytes = env::storage_usage() - initial_storage_usage;

    }
    
    pub fn Send_prize_Winner(amount: U128, to: AccountId) -> Promise {
        Promise::new(to).transfer(amount.0)
    }

    
}
