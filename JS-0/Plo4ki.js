function Plo4ki([N,W,L,M,O]){
    Num=(N*N-M*O)/(W*L);
    T=Num*0.2;
    console.log(Math.round(Num*100)/100);
    console.log(Math.round(T*100)/100);
}

Plo4ki([20,5,4,1,2]);
Plo4ki([40,0.8,0.6,3,5]);