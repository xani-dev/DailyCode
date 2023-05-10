const stringMethods = () =>{
    let stringTest = ' @,⭐, ❤️, ⚽, 😎, ❤️, 🔥, 👍 ';
    let capsTest = '      -hello woRLD oF STARS-        '
    console.log(stringTest);
    console.log('slice method: ' + stringTest.slice(0,4));
    console.log('substring method: ' + stringTest.substring(3));
    console.log('replace method: ' + stringTest.replace('❤️', '🗽'));
    console.log('replaceAll method: ' + stringTest.replaceAll('❤️', '🗽'));
    console.log('toLowerCase Method: ' + capsTest.toLowerCase());
    console.log('toUpperCase Method: ' + capsTest.toUpperCase());
    console.log('concat Method: ' + stringTest.concat(...capsTest));
    console.log('trim Method: ' + capsTest.trim());
    console.log('trimStart Method: ' + capsTest.trimStart());
    console.log('trimEnd Method: ' + capsTest.trimEnd());
    console.log('padStart Method: ' + stringTest.padStart(40, '⚽,'));
    console.log('padEnd Method: ' + stringTest.padEnd(40, '⚽,'));
    console.log('chatAt Method: ' + stringTest.charAt(0));
    console.log('chatAt Method: ' + stringTest.charCodeAt(0));
    console.log('chatAt Method: ' + capsTest.split(''));


}

stringMethods();