const notificationElement = document.getElementById('notification-container');
const wordEl= document.getElementById('word');
const wordsList=['hola','mundo','javascript','python','hello','world'];
const wrongLetterContainer=document.querySelector('.wrong-letter-container');
const correctLetters=[];
const wrongLetters=[];
let wordSelected=wordsList[Math.floor(Math.random()*wordsList.length)];
function displayWord(){
    wordEl.innerHTML=`
        ${wordSelected.split('').map(letter=>`
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')}
    `;
    const innerWord=wordEl.innerText.replace(/\n/g,'');
    if(innerWord===wordSelected){
        // notificationElement.classList.add('show');
        notificationElement.innerText='You won!';
    }
}
function showNotification(){
    notificationElement.classList.add('show');
    document.querySelector('#container').style.filter='blur(5px)';
    setTimeout(()=>{
        notificationElement.classList.remove('show');
        document.querySelector('#container').style.filter='none';
    },2000);
}
function updateWrongLettersEl(){
    wrongLetterContainer.innerHTML=`
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter=>`<span>${letter}</span>`)}
    `;
}
playAgainBtn=document.getElementById('play-button');
playAgainBtn.addEventListener('click',function(){
    correctLetters.splice(0);
    wrongLetters.splice(0);
    wordSelected=wordsList[Math.floor(Math.random()*wordsList.length)];
    displayWord();
    notificationElement.classList.remove('show');
})
window.addEventListener('keydown',function(e){
    if(
        e.key==='a'
        ||e.key==='b'
        ||e.key==='c'
        ||e.key==='d'
        ||e.key==='e'
        ||e.key==='f'
        ||e.key==='g'
        ||e.key==='h'
        ||e.key==='i'
        ||e.key==='j'
        ||e.key==='k'
        ||e.key==='l'
        ||e.key==='m'
        ||e.key==='n'
        ||e.key==='ñ'
        ||e.key==='o'
        ||e.key==='p'
        ||e.key==='q'
        ||e.key==='r'
        ||e.key==='s'
        ||e.key==='t'
        ||e.key==='u'
        ||e.key==='v'
        ||e.key==='w'
        ||e.key==='x'
        ||e.key==='y'
        ||e.key==='z'
    ){
        if(wordSelected.includes(e.key)){
            if(!correctLetters.includes(e.key)){
                correctLetters.push(e.key);
                displayWord();
            }else{
                showNotification();
            }
        }else{
            if(!wrongLetters.includes(e.key)){
                wrongLetters.push(e.key);
                updateWrongLettersEl();
            }else{
                showNotification();
            }
        }
    }
})