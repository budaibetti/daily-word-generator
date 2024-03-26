const wordDay = [
  {  word: {
    id: '1',
    Italian:'sfida',
    English: 'challenge',
    Hungarian:'kihívás'}
  ,
  meaning: {
    Italian:'Una situazione che richiede sforzo, coraggio o competenza per essere superata.',
    English: 'A situation that requires effort, courage or skill to overcome.',
    Hungarian:'Olyan helyzet, amelynek leküzdése erőfeszítést, bátorságot vagy szakértelmet igényel.'},
  example: {
    Italian:'Imparare una nuova lingua può essere una sfida, ma anche estremamente gratificante.',
    English: 'Learning a new language can be a challenge, but it is also extremely rewarding.',
    Hungarian:'Egy új nyelv elsajátítása nagy kihívás, de egyben rendkívül kifizetődő folyamat is lehet.'}
  },
  {word: {
    id: '2',
    Italian: 'spiritoso',
    English: 'witty',
    Hungarian: 'szellemes'
  },
  meaning: {
    Italian: "Si riferisce a una persona intelligente e pronta a fare battute o commenti divertenti, dimostrando un sofisticato senso dell'umorismo.",
    English: "It refers to a person who is intelligent and ready to make jokes or funny comments, demonstrating a sophisticated sense of humour.",
    Hungarian: "Olyan személy, aki intelligens és bármikor képes viccelődni vagy vicces megjegyzéseket tenni, tanúbizonyságot téve kifinomult humorérzékéről."
  },
  example: {
    Italian: 'È la persona più spiritosa che conosca, i suoi commenti fanno sempre ridere.',
    English: 'He is the wittiest person I know, his comments always make people laugh.',
    Hungarian: 'Ő a legszellemesebb ember, akit ismerek, a megjegyzései mindenkit megnevettetnek.'
  }
  },
  {word: {
    id: '3',
    Italian: "sorriso",
    English: "smile",
    Hungarian: "mosoly"
  },
  meaning: {
    Italian: "L'espressione facciale che si forma quando le labbra si curvano verso l'alto, spesso indicando gioia, felicità o gentilezza.",
    English: "The facial expression formed when the lips curve upwards, often indicating joy, happiness or kindness.",
    Hungarian: "Az ajkak felfelé görbülésével kialakuló arckifejezés, amely gyakran örömöt, boldogságot vagy jóindulatot jelez."
  },
  example: {
    Italian: "Un sorriso può fare la differenza nei momenti difficili.",
    English: "A smile can make a difference in tough times.",
    Hungarian: "Egy mosoly komoly változást hozhat a nehéz időkben."
  } 
  },
  {word: {
    id: '4',
    Italian: 'cupo',
    English: 'gloomy',
    Hungarian: 'komor'
  },
  meaning: {
    Italian: "Un'atmosfera scura, triste o malinconica, spesso associata a una mancanza di luce o allegria, evocando un senso di tristezza o desolazione",
    English: 'A dark, dismal, or melancholic atmosphere, often associated with a lack of light or cheerfulness, evoking a sense of sadness or desolation.',
    Hungarian: 'Sötét, szomorú vagy melankolikus légkör, amely gyakran a fény vagy a vidámság hiányával társul, a szomorúság vagy a sivárság érzetét kelti.'
  },
  example: {
    Italian: "Il tempo scuro e cupo spesso influenza negativamente l'umore delle persone durante l'inverno.",
    English: " The dark and gloomy weather often negatively influences people's mood during winter.",
    Hungarian: "A téli sötét és komor időjárás  gyakran rossz hatással van az emberek közérzetére."
  } 
  },
  {word: {
    id: '5',
    Italian: 'vivace',
    English: 'lively',
    Hungarian: 'élénk'
  },
  meaning: {
    Italian: "Pieno di energia, entusiasmo o eccitazione.",
    English: 'Full of energy, enthusiasm or excitement.',
    Hungarian: 'Energiával, lelkesedéssel vagy izgalommal teli.'
  },
  example: {
    Italian: 'Il parco diventava ancora più vivace quando le famiglie si riunivano per un picnic.',
    English: 'The park became even livelier when families gathered for a picnic.',
    Hungarian: 'A park még élénkebbé vált, amikor a családok összegyűltek piknikezni.'
  } 
  },
  {word: {
    id: '6',
    Italian: 'entusiasta',
    English: 'enthusiastic',
    Hungarian: 'lelkes'
  },
  meaning: {
    Italian: "Mostra un'intensa eccitazione, interesse o voglia riguardo a qualcosa.",
    English: 'Showing intense excitement, interest, or eagerness about something.',
    Hungarian: 'Fokozott izgatottságot, érdeklődést vagy vágyat mutat valami iránt.'
  },
  example: {
    Italian: "Gli studenti erano entusiasti all'idea di partecipare al concorso.",
    English: 'The students were enthusiastic about participating in the competition',
    Hungarian: 'A diákok nagy lelkesedéssel vettek részt a versenyen.'
  } 
  },
  {word: {
    id: '7',
    Italian: 'curioso',
    English: 'curious',
    Hungarian: 'kíváncsi'
  },
  meaning: {
    Italian: "Desideroso di conoscere o imparare qualcosa, mostra interesse per la scoperta, l'esplorazione o la comprensione.",
    English: 'Eager to know or learn something, shows interest in discovery, exploration or understanding.',
    Hungarian: 'Buzgón szeretne megtudni vagy megtanulni valamit, érdeklődést mutat a felfedezés, tájékozódás iránt.'
  },
  example: {
    Italian: 'I bambini sono curiosi e desiderosi di esplorare il loro ambiente.',
    English: 'Children are curious and eager to explore their environment.',
    Hungarian: 'A gyerekek kíváncsiak és alig várják, hogy felfedezzék a környezetüket.'
  } 
  },
  {word: {
    id: '8',
    Italian: 'premuroso',
    English: 'thoughtful',
    Hungarian: 'figyelmes'
  },
  meaning: {
    Italian: "Mostra particolare attenzione e cura per gli altri.",
    English: 'Showing careful consideration or attention towards others.',
    Hungarian: 'Mások iránt különös figyelmet vagy törődést tanúsít.'
  },
  example: {
    Italian: "Un gesto premuroso può rendere più allegra la giornata di chiunque.",
    English: "A thoughtful gesture can make anyone's day more cheerful.",
    Hungarian: 'Egy figyelmes gesztus bárki napját vidámabbá teheti.'
  } 
  },
  {word: {
    id: '9',
    Italian: 'sincero',
    English: 'sincere',
    Hungarian: 'őszinte'
  },
  meaning: {
    Italian: "Genuino, onesto e sincero nei sentimenti, nei pensieri o nelle azioni; senza infingimenti o inganni.",
    English: 'Genuine, honest, and truthful in feelings, thoughts, or actions; without pretence or deceit.',
    Hungarian: 'Valódi, becsületes és őszinte érzések, gondolatok vagy tettek; színlelés vagy megtévesztés nélkül.'
  },
  example: {
    Italian: "Le sue scuse sembravano sincere e hanno commosso tutti",
    English: "Her apology seemed sincere, and it touched everyone's heart",
    Hungarian: 'A bocsánatkérése őszintének tűnt, és mindenkit meghatott.'
  } 
  },
  {word: {
    id: '10',
    Italian: 'amichevole',
    English: 'friendly',
    Hungarian: 'barátságos'
  },
  meaning: {
    Italian: "Cordiale e di buon carattere durante le interazioni sociali; mostra gentilezza e un atteggiamento positivo nei confronti degli altri.",
    English: "Cordial and good-natured in social interactions; shows kindness and a positive attitude towards others.",
    Hungarian: 'Szívélyes és jóindulatú a szociális interakciók során; kedvességet és pozitív hozzáállást mutat másokkal szemben.'
  },
  example: {
    Italian: "Il negoziante ci ha accolto con un sorriso amichevole.",
    English: 'The shopkeeper greeted us with a friendly smile.',
    Hungarian: 'Az eladó barátságos mosollyal köszöntött minket.'
  } 
  },
  {word: {
    id: '11',
    Italian: 'godere',
    English: 'enjoy',
    Hungarian: 'élvezni'
  },
  meaning: {
    Italian: "Provare piacere o gioia in qualcosa; trovare soddisfazione o felicità in un'attività o esperienza.",
    English: 'To take pleasure or delight in something; to find satisfaction or happiness in an activity or experience.',
    Hungarian: 'Örömet lelni valamiben; elégedettséget vagy boldogságot találni egy valamilyen tevékenység vagy élmény során.'
  },
  example: {
    Italian: 'Si gode il processo di risoluzione di enigmi complicati, trovando gioia nella sfida e nel senso di realizzazione che ne deriva.',
    English: 'He enjoys the process of solving complicated puzzles, finding joy in the challenge and sense of achievement that comes with it.',
    Hungarian: 'Élvezi a bonyolult rejtvények megfejtését, örömét leli a kihívásban és az ezzel járó sikerélményben.'
  } 
  },
  {word: {
    id: '12',
    Italian: 'sostenere',
    English: 'support',
    Hungarian: 'támogatni'
  },
  meaning: {
    Italian: 'Fornire assistenza, aiuto o incoraggiamento a qualcuno o qualcosa; dare aiuto, sostegno o rinforzo.',
    English: 'To provide assistance, help, or encouragement to someone or something; to give aid, backing, or reinforcement.',
    Hungarian: 'Segítséget, támaszt vagy bátorítást nyújtani valakinek vagy valaminek.'
  },
  example: {
    Italian: 'Lei sostiene sempre i suoi amici sia nei momenti belli che in quelli difficili.',
    English: "She always supports her friends through both good and tough times.",
    Hungarian: 'Mindig támogatja barátait a jobb és a nehezebb időkben egyaránt.'
  } 
  },
{word: {
  id: '13',
  Italian: 'adattarsi',
  English: 'adapt',
  Hungarian: 'alkalmazkodni'
},
meaning: {
  Italian: 'Cambiare noi stessi o qualcosa per conformarsi a nuove circostanze, ambienti o condizioni.',
  English: 'Changing ourselves or something to conform to new circumstances, environments or conditions.',
  Hungarian: 'Önmagunk vagy valami megváltoztatása, hogy alkalmazkodjunk az új körülményekhez, környezethez vagy feltételekhez.'
},
example: {
  Italian: 'Alcuni animali si adattano ai climi più freddi facendo crescere una pelliccia più folta.',
  English: 'Some animals adapt to colder climates by growing thicker fur.',
  Hungarian: 'Bizonyos állatfajok úgy alkalmazkodnak a hidegebb éghajlathoz, hogy vastagabb szőrzetet növesztenek.'
} 
},
{word: {
  id: '14',
  Italian: 'superare',
  English: 'overcome',
  Hungarian: 'legyőzni'
},
meaning: {
  Italian: 'Affrontare con successo una difficoltà o un ostacolo; prevalere su qualcosa di impegnativo.',
  English: 'Successfully tackling a difficulty or obstacle; prevailing over something challenging.',
  Hungarian: 'Egy nehézség vagy akadály sikeres leküzdése; valamilyen kihívás áthidalása.'
},
example: {
  Italian: 'Nonostante i numerosi contrattempi, sono riusciti a superare le avversità e a raggiungere un notevole successo.',
  English: 'Despite numerous setbacks, they managed to overcome adversity and achieve considerable success.',
  Hungarian: 'A számos kudarc ellenére sikerült legyőzniük a nehézségeket és jelentős sikereket értek el.'
} 
},
{word: {
  id: '15',
  Italian: 'scoprire',
  English: 'discover',
  Hungarian: 'felfedezni'
},
meaning: {
  Italian: 'Trovare, imparare o prendere consapevolezza di qualcosa per la prima volta; rivelare qualcosa che prima era sconosciuto.',
  English: 'Finding, learning or becoming aware of something for the first time; revealing something that was previously unknown.',
  Hungarian: 'Valaminek a megtalálása, megismerése vagy felismerése; valami korábban ismeretlen dolog feltárása.'
},
example: {
  Italian: "Grazie a ricerche approfondite, gli scienziati hanno scoperto una nuova specie di vita marina che risiede nelle profondità inesplorate dell'oceano.",
  English: 'Through extensive research, scientists discovered a new species of marine life residing in the uncharted depths of the ocean.',
  Hungarian: 'A széles körű kutatások révén a tudósok egy új tengeri élőlényt fedeztek fel, amely az óceán eddig feltáratlan mélyén él.'
} 
},
{word: {
  id: '16',
  Italian: '',
  English: '',
  Hungarian: ''
},
meaning: {
  Italian: '',
  English: '',
  Hungarian: ''
},
example: {
  Italian: '',
  English: '',
  Hungarian: ''
} 
}
]
const hoursEl = document.getElementById ('hours');
const minsEl = document.getElementById ('minutes');
const secondsEl = document.getElementById ('seconds');

const mainWordCont = document.getElementById('main-word-container');

const mainWord = document.getElementById('main-word');
const meaningIt =document.getElementById('word-meaning-it');
const exampleIt = document.getElementById('word-example-it');
const meaningEn = document.getElementById('word-meaning-en');
const exampleEn = document.getElementById('word-example-en');
const meaningHu =document.getElementById('word-meaning-hu');
const exampleHu = document.getElementById('word-example-hu');

const favwordinfo = document.getElementById('word-info');


let currentWord = 0;



loadWordData();
setInterval(countdown, 1000);
const favBtn = document.getElementById('fav-btn');
const numberofFavs = document.getElementById('fav-words-numb');


function countdown() {
    const currentDate = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24,0,0);

  
    const totalSeconds = new Date(tomorrow-currentDate)/1000;
    const Minutes = Math.floor(totalSeconds/60)% 60;
    const Hours= Math.floor(totalSeconds/ 3600) % 24;

    const seconds = Math.round (totalSeconds %60);


    hoursEl.innerHTML = formatTime (Hours);
    minsEl.innerHTML = formatTime (Minutes);
    secondsEl.innerHTML = formatTime (seconds);

}

const now = new Date();
    const millisTill24 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0) - now;
    if (millisTill24 < 0) {
        millisTill24 += 86400000; 
}

setTimeout(loadNextWord, Math.round (millisTill24));

   
function formatTime(time) {
  return time < 10 ? `0 ${time}` : time;
}

 

function loadWordData() {

  
  const currentWordData = JSON.parse(localStorage.getItem('wordData'));

  if (!currentWordData) {
    defaultWordData();
  } else {
    mainWord.innerHTML = `${currentWordData.word.Italian}/${currentWordData.word.English }/${currentWordData.word.Hungarian}`;
  meaningIt.innerHTML = `Significato: ${currentWordData.meaning.Italian}`;
  exampleIt.innerHTML = `Esempio: ${currentWordData.example.Italian}`;
  meaningEn.innerHTML = `Meaning: ${currentWordData.meaning.English }`;
  exampleEn.innerHTML = `Example: ${currentWordData.example.English}`;
  meaningHu.innerHTML = `Jelentés: ${currentWordData.meaning.Hungarian}`;
  exampleHu.innerHTML = `Példamondat: ${currentWordData.example.Hungarian}`;


  console.log('Current Word Data:', currentWordData);
      }
  
  }
 
  
  


function loadNextWord () {
  currentWord++;
  addtoLS();

favBtn.classList.remove('active');
    if (currentWord < wordDay.length) {
      loadWordData();
    } else {
      location.reload();
}

}

const itBtn = document.getElementById('it-lang');
itBtn.addEventListener('click', ()=>{
  
  loadNextWord();
});

function addtoLS() {
  const wordData = wordDay[currentWord];
    localStorage.setItem('wordData', JSON.stringify(wordData));
    console.log(wordData);
}

 
   

    
function defaultWordData() {
  const defaultData =wordDay[currentWord];
  mainWord.innerHTML = `${defaultData.word.Italian}/${defaultData.word.English}/${defaultData.word.Hungarian}`;
  meaningIt.innerHTML = `Significato: ${defaultData.meaning.Italian}`;
  exampleIt.innerHTML = `Esempio: ${defaultData.example.Italian}`;
  meaningEn.innerHTML = `Meaning: ${defaultData.meaning.English}`;
  exampleEn.innerHTML = `Example: ${defaultData.example.English}`;
  meaningHu.innerHTML = `Jelentés: ${defaultData.meaning.Hungarian}`;
  exampleHu.innerHTML = `Példamondat: ${defaultData.example.Hungarian}`;

}

const favcontainer = document.getElementById("fav-container");
  const popupCont = document.querySelector('.popup-container');
  const popupCloseBtn = document.getElementById("close-popup");

favcontainer.addEventListener('click', ()=>{
  getFavWords();
});

popupCloseBtn.addEventListener('click', ()=>{
  popupCont.classList.add('hidden');
});







  


function getfromLS() {
  const retrievedData = JSON.parse(localStorage.getItem('wordData'));
  console.log(retrievedData);
    return retrievedData; 
  
  
}


favBtn.addEventListener('click', () => {
  if (favBtn.classList.contains('active')) {
    favBtn.classList.remove('active');
  } else {
    favBtn.classList.add('active');
  addfavWords();
  updateFavNum();
}
});


function getFavWords() {
  popupCont.classList.remove('hidden');
  favwordinfo.innerHTML= '';
  const favWordData = getfavsfromLs().filter(word => word !== null && word !== undefined);
  console.log(favWordData);

  if (favWordData.length === 0) {
    const popup = document.createElement('div');
    popup.innerText = `Your list of favourite words is empty.`;
    favwordinfo.appendChild(popup);
  } else {
    for (let i = 0; i < favWordData.length; i++) {
      const word = favWordData[i];
      const popup = document.createElement('div'); 
      
    popup.innerHTML= `
    <div class="fav-popup-words-container">
    <h1 class= "fav-popup-lang"> Italiano/English/Magyar:</h1>
    <p class= "fav-popup-words"> ${word.Italian || ''} / ${word.English || ''}/ ${word.Hungarian || ''} </p>
     </div> `;

      favwordinfo.appendChild(popup);
      
    
    }
  }
}

function updateFavNum () {
  const favWordData = getfavsfromLs().filter(word => word !== null && word !== undefined);

const favNumb = favWordData.length;

 if(favNumb===0) {
  numberofFavs.innerHTML = '0';} 
  else {
    numberofFavs.innerHTML = `${favNumb}`
  }

}
function addfavWords(){
    const favWordData = getfromLS();
    console.log(favWordData);
    let existingFavWords = JSON.parse(localStorage.getItem(['favWords'])) || [];

    if (favWordData) {
      const wordToAdd = favWordData.word;

    if (!existingFavWords.some(word => JSON.stringify(word) === JSON.stringify(wordToAdd))) {
      existingFavWords.push(wordToAdd);
      localStorage.setItem('favWords', JSON.stringify(existingFavWords));
  }
}
}


function getfavsfromLs () {

return JSON.parse(localStorage.getItem('favWords'));
 
}


updateFavNum();
console.log(localStorage);