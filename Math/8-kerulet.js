const points = [
    { x:1, y:-1},
    { x:4, y:0},
    { x:5, y:3},
    { x:3, y:4},
    { x:3, y:4},
    { x:-1, y:2}
];

function perimeter (points){
    let s =0;
    for (let i=0; i < points.lenght-1; i++){
        s+= distance (points)
    }
}