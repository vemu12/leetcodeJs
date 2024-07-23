function reverseString(input){
    let words=input.split(' ');
    let output=[];
    for(let i=0;i<words.length;i++){
        let word=words[i];
        let reversed='';
    for(j=word.length-1;j>=0;j--){
        reversed +=word[j];
    }
    output.push(reversed)
    }
    return output.join(' ')
}

let input="Hello world";
let result=reverseString(input);
console.log(result);