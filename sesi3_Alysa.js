// For Loop
console.log("For Loop:");
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

// While Loop
console.log("\n While Loop:");
let i = 1;
while (i <= 5) {
    let row = '';
    let j = 1;
    while (j <= i) {
        row += '* ';
        j++;
    }
    console.log(row);
    i++;
}

// Do-While Loop
console.log("\n Do-While Loop:");
i = 1;
do {
    let row = '';
    let j = 1;
    do {
        row += '* ';
        j++;
    } while (j <= i);
    console.log(row);
    i++;
} while (i <= 6);

// ForEach - array)
console.log("\n ForEach:");
const rows = [1, 2, 3, 4, 5, 6, 7];
rows.forEach(num => {
    let row = '';
    for (let j = 1; j <= num; j++) {
        row += '* ';
    }
    console.log(row);
});

// If-Else 
console.log("\n\ If-Else:");
for (let i = 1; i <= 8; i++) {
    let row = '';
    for (let j = 1; j <= 8; j++) {
        if (j <= i) {
            row += '* ';
        } else {
            row += '  '; 
        }
    }
    console.log(row);
}