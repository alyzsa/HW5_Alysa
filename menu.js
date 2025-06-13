import { kalkulator } from './rumus.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitung() {
    rl.question('Masukkan angka pertama: ', (angka1) => {
        rl.question('Masukkan angka kedua: ', (angka2) => {
            rl.question('Masukkan operator (+, -, *, /): ', (operator) => {
                const num1 = parseFloat(angka1);
                const num2 = parseFloat(angka2);
                
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("Input angka tidak valid!");
                    hitung(); 
                    return;
                }

                const hasil = kalkulator(num1, num2, operator);
                console.log(`Hasil: ${num1} ${operator} ${num2} = ${hasil}`);
                
                rl.close();
            });
        });
    });
}

hitung();