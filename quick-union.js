var id = [];

function quickUnionUF(N) { // Creates the array we will working with 
    for (let i = 0; i < N; i++) {
        id[i] = i;
    }
}

function root(i) {
    while (i != id[i]) { // While i is not equal to the array position value
        i = id[i] // Assign i to the array position value
        return i; // Return i 
    }
}

function connected(p, q) { // check if p and q have the same root 
    return root(p) == root(q);
}

function union(p, q) { // Change root of p to point to root of q 
        i = root(p); // Find the two roots
        j = root(q);
        id[i] = j; // Set the id of the first root to the second one 
}
