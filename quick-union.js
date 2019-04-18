var id = [];

function quickUnionUF(N) { // Creates the array we will working with 
    for (let i = 0; i < N; i++) {
        id[i] = i;
    }
}

function root(i) {
    while (i != id[i]) { // Chase parent pointers until root is reached 
        i = id[i] 
        return i;
    }
}

function connected(p, q) { // check if p and q have the same root 
    return root(p) == root(q);
}

function union(p, q) { // Change root of p to point to root of q 
        i = root(p)
        j = root(q);
        id[i] = j;
}
