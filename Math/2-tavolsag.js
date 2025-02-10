function distance (A, B){
    const gyokalatti = A.x - B.x*A.x - B.x + A.y - B.y*A.y - B.y;
    return (Math.sqrt(gyokalatti));
}