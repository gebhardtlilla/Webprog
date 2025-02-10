function hasonlit (a,b){
    if (a<b){
        return -1;  
    }
    else if (b<a)
    {
        return 1;
    }
    else{
        return 0;
    }
}

function hasonlit2 (a,b){
    return a.localeCompare(b);
}

