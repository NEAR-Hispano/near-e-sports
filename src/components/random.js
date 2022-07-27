function randomizar(vectorEquipos){
    vectorEquipos.sort(function() { return Math.random() - 0.5 })
    return vectorEquipos
}

const EquiposTest = [

    {
        idteam: 1,
        name: "El One",
        owner: "one,test"
    },
    {
        idteam: 2,
        name: "El Two",
        owner: "two,test"
    },{
        idteam: 3,
        name: "El Tri",
        owner: "Tri,test"
    },
    {
        idteam: 4,
        name: "El For",
        owner: "for,test"
    }, {
        idteam: 5,
        name: "El Five",
        owner: "five,test"
    },{
        idteam: 6,
        name: "El Six",
        owner: "Six,test"
    },{
        idteam: 7,
        name: "El Seven",
        owner: "Seven,test"
    },{
        idteam: 8,
        name: "El Ocho",
        owner: "Seven,test"
    },{
        idteam: 9,
        name: "El Nueve",
        owner: "Seven,test"
    },{
        idteam: 10,
        name: "El 10",
        owner: "one,test"
    },
    {
        idteam: 11,
        name: "El 11",
        owner: "two,test"
    },
    {
        idteam: 12,
        name: "El 12",
        owner: "two,test"
    },
    {
        idteam: 13,
        name: "El 13",
        owner: "two,test"
    },
    {
        idteam: 14,
        name: "El 14",
        owner: "two,test"
    },{
        idteam: 15,
        name: "El 15",
        owner: "two,test"
    },
    {
        idteam: 16,
        name: "El 16",
        owner: "two,test"
    },
    {
        idteam: 17,
        name: "El 17",
        owner: "two,test"
    },
]

let vec = randomizar(EquiposTest)
vec = randomizar(EquiposTest)
vec = randomizar(EquiposTest)

console.log(vec)