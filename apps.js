 let pronoun = ['the', 'our' , 'your'];
 let adj = ['great', 'big' , 'extraordinary' , 'amazing'];
 let noun = ['jogger', 'racoon' , 'cat'];
 let domainhacks =['.com' , '.net' , '.us' , '.io']

 for (let i = 0 ; i < pronoun.length ; i++){
     for (let a=0 ; a < adj.length ; a++){
        for (let n = 0 ; n < noun.length ; n++ ){ 
  for (let d = 0; d < domainhacks.length;d++) {
    console.log(pronoun[i] + adj[a] + noun[n]  + domainhacks[d] )
    
   } 
     
 }
}
}

