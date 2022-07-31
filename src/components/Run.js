import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import Inscribir from '../assets/Inscribir.png';
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { useParams } from 'react-router-dom';
import { toYotta, login } from '../utils';

export default function Run() {

    const NearCost = toYotta("0").toLocaleString('fullwide', { useGrouping: false })

    let receiver_id = "testnearesports.testnet"

    let to = "testnearesports.testnet"

    let amount = toYotta("7").toLocaleString('fullwide', { useGrouping: false })

    let owner_id = "kevinhernandez.testnet"
    let NFTContractMetadata = {
        spec: "nft-1.0.0",
        name: "NFT Nears Essports Tournaments",
        symbol: "NET",
        icon: null,
        base_uri: null,
        reference: null,
        reference_hash:null,
    } 
    let metadata = NFTContractMetadata 

     useEffect(() => {
        Verificar()
      }, [])


    const Verificar = async () => {
        
        console.log("Cargando");

        
        const contrato = await contract.new({
            owner_id:owner_id,
            metadata: metadata 
        })

        

    }

    return (
        <div>
            <Container cclassName="text-blanco mt-5 mb-5">
                <p>Cargando</p>
            </Container>
        </div>
    );
    }

 