
const name = "Omkar"; // normal javscript

const nameRct = <h1>Omkar</h1>;

console.log(nameRct);


const mySurname = <h2>Chauhan</h2>;
console.log(mySurname);

const add = <h3>Marhi Jaunpur India</h3>
console.log(add);



try {
    const ressult = fetch(`https://api.github.com/users/${nameRct}`)
    console.log(ressult)
    
} catch (error) {
    
}
