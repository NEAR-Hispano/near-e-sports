use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{ env, near_bindgen, AccountId, Balance, CryptoHash, PanicOnDefault, Promise, PromiseOrValue, BorshStorageKey, require, };
use serde::Serialize;
use serde::Deserialize;
use near_sdk::collections::LookupMap;
use near_sdk::collections::UnorderedMap;
use near_sdk::collections::Vector;
use std::collections::HashMap;

setup_alloc!();


pub const TOKEN_DELIMETER: char = ':';
pub const TITLE_DELIMETER: &str = " #";
pub const VAULT_FEE: u128 = 500;

const GAS_FOR_RESOLVE_TRANSFER: Gas = 10_000_000_000_000;
const NO_DEPOSIT: Balance = 0;
const MAX_PRICE: Balance = 1_000_000_000 * 10u128.pow(24);


pub type TokenSeriesId = String;

#[derive(Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Payout {
    pub payout: HashMap<AccountId, U128>,
}

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
    creator: User,
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
}

pub struct Contract {
    tokens: NonFungibleToken,
        
    pub owner_id: AccountId,
    
        // Lista de torneos
    pub Tournament: UnorderedMap<i128, Tournament>,


        //Lista de Equipos 
    
        pub Team: UnorderedMap<i128, Team>,   
    }



//--------------------------Crear contrato--------------------------

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
    token_series_by_id: UnorderedMap<TokenSeriesId, TokenSeries>,
    vault_id: AccountId,
    tournament_list: UnorderedMap<i128, Tournament>,
    teams_list: UnorderedMap<i128, Team>
    
}


#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    NonFungibleToken,
    Metadata,
    TokenMetadata,
    Enumeration,
    Approval,
    TokenSeriesById,
    TokensBySeriesInner { token_series: String },
    TokensPerOwner { account_hash: Vec<u8> },
}


#[near_bindgen]
impl Contract {
    #[init]
    pub fn new_default_meta(owner_id: AccountId) -> Self {
        Self::new(
            owner_id,
            vault_id
            NFTContractMetadata {
                spec: NFT_METADATA_SPEC.to_string(),
                name: "Near Tournaments Esports".to_string(),
                symbol: "Near Tounaments Esports".to_string(),
                icon: None,
                base_uri: None,
                reference: None,
                reference_hash: None,
            },
        )
    }
    }
    #[init]
    pub fn new(owner_id: ValidAccountId, vault_id: ValidAccountId, metadata: NFTContractMetadata) -> Self {
        assert!(!env::state_exists(), "Already initialized");
        metadata.assert_valid();
        Self {
            tokens: NonFungibleToken::new(
                StorageKey::NonFungibleToken,
                owner_id,
                Some(StorageKey::TokenMetadata),
                Some(StorageKey::Enumeration),
                Some(StorageKey::Approval),
            ),
            token_series_by_id: UnorderedMap::new(StorageKey::TokenSeriesById),
            metadata: LazyOption::new(StorageKey::Metadata, Some(&metadata)),
            vault_id: vault_id.to_string(),
            teams_list: UnorderedMap::new(StorageKey::Team),
            tournament_list: UnorderedMap::new(StorageKey::Tournament),
            
        }
    }
    #[payable]

//------------------------------------------------------Funciones del contrato---------------------------


    // Crear torneo
    pub fn create_tournament(&mut self,
        name: String,
        description: String,
        creator: User,
        date:u64,
        teams: Vec<Team>
        winner:String,
        prize:u32

     ) -> Tournament {
        // Initial storage usage
        let initial_storage_usage = env::storage_usage();
        let caller = env::signer_account_id();
        let index = i128::from(self.events.len() + 1);
        let mut children_token_map = Vec::new();
        let mut metadata = TokenMetadata {
            title: None,
            description: None,
            media: None,
            media_hash: None,
            copies: None,
            issued_at: None,
            expires_at:None,
            starts_at: None,
            updated_at: None,
            extra: None,
            reference: None,
            reference_hash: None,
        };
    }

    // Crear torneo
    pub fn create_team(&mut self,
        name: String,
        integrants: Vec<User>,
        tournaments: Vec<Tournament>

     ) -> Team {
        // Initial storage usage
        let initial_storage_usage = env::storage_usage();
        let caller = env::signer_account_id();
        let index = i128::from(self.events.len() + 1);
        let mut children_token_map = Vec::new();
        let mut metadata = TokenMetadata {
            title: None,
            description: None,
            media: None,
            media_hash: None,
            copies: None,
            issued_at: None,
            expires_at:None,
            starts_at: None,
            updated_at: None,
            extra: None,
            reference: None,
            reference_hash: None,
        };
    }






