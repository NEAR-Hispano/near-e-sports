import { Bracket, RoundProps } from 'react-brackets';
import React from "react";

const rounds = [
    {
        title: 'Round one',
        seeds: [
            {
                id: 1,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 2,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 3,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 5,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 7,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 8,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 9,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 10,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 11,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 12,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 13,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 14,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 15,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
            {
                id: 16,
                date: new Date().toDateString(),
                teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
        ],
    },
    {
        title: 'Round two',
        seeds: [
            {
                id: 17,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 18,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 19,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 20,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 21,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 22,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 23,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 24,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
        ]
    },
    {
        title: 'Round Cuartos',
        seeds: [
            {
                id: 25,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 26,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 27,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 28,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
           ]
    },
    {
        title: 'Round  Semi',
        seeds: [
            {
                id: 29,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
                id: 30,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
           ]
    },
    {
        title: 'Round  final',
        seeds: [
            {
                id: 31,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
           ]
    },
    
];

const RenderBracket = () => {
    return <Bracket rounds={rounds} />;
};

export default RenderBracket;