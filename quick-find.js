var id = [];

function quickFindUF(N) { // Creates the array we will working with 
    for (let i = 0; i < N; i++) {
        id[i] = i;
    }
}

function connected(p, q) { // check if p and q have the same root 
    return root(p) == root(q);
}

function union(p, q) { // Change root of p to point to root of q 
    var pid = id[p]; // Get the values from the id index position 
    var qid = id[q];

    for (let i = 0; i < id.length; i++) {
        if (id[i] === pid) { // If any value in the array matches the value we sent in, then reassign the array value 
            id[i] = qid;
        }
        
    }
}
