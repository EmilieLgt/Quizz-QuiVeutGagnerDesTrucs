import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardQuestion from './components/CardQuestion'
import Compteur from './components/Compteur'



function App() {

  const questions = [{
    numéro : 1, 
    intitulé : "Pendant leurs cours, les professeurs d’économie parlent souvent du “pouvoir...", 
    a : "A. Des chats",
    b : "B. D'Aïcha",
    c : "C. Des geishas",
    d : "D. D'achat",  /* bonne réponse*/
    prix : "",
    correctAnswer:"D. D'achat"
  },

  {
    numéro : 2, 
    intitulé : " Quel est le petit du lapin ?", 
    a : "A. Lapereau",
    b : "B. Lapineau",
    c : "C. Lapereau",  /*bonne réponse*/ 
    d : "D. Lapineau", 
    prix : "",
    correctAnswer : "C. Lapereau"
  },
  {
    numéro : 3, 
    intitulé : "Quel est le premier producteur mondial de bananes ?", 
    a : "A. La Chine",
    b : "B. La Tanzanie",
    c : "C. Le Brésil",
    d: "D. L'Inde", /*bonne réponse*/
    prix : "",
    correctAnswer :"D. L'Inde"
  },
  {
    numéro : 4, 
    intitulé : "Laquelle de ces chansons n'est pas interprétée par Madonna ?", 
    a : "A. Purple Rain",
    b : "B. True Blue",
    c : "C. Holiday",
    d : "D. Vogue", /*bonne réponse*/ 
    prix : "",
    correctAnswer : "A. Purple Rain"
  },

  {
    numéro : 5, 
    intitulé : "Quel célèbre couturier a dessiné la couverture du petit Larousse ?", 
    a : "A. Yves Saint Laurent",
    b : "B. Christian Lacroix", /*bonne réponse */ 
    c : "C. Karl Lagerfield",
    d : "D. Jean-Paul Gaultier",
    prix : "",
    correctAnswer: "B. Christian Lacroix"

  },
  {
    numéro : 6, 
    intitulé : "Qu'est-ce que la climacophobie ? La peur incontrôlable ", 
    a : "A. Des fôrets",
    b : "B. De la boue",
    c : "C. Des escaliers", /*bonne réponse*/ 
    d: "D. De l'encre",
    prix : "",
    correctAnswer: "C. Des escaliers"

  }
]
const [questionIndex, setQuestionIndex] = useState(0)
const passageQuestion = (index) => setQuestionIndex(index)
console.log(setQuestionIndex)

const next = () => {setQuestionIndex((prevIndex) => (prevIndex + 1));
};
const [active, setActive] = useState(false)


  return (
    <>
   <h1 className="titreSite">Qui veut gagner ? </h1>
   <CardQuestion question={questions[questionIndex]} questions={questions} passageQuestion={passageQuestion} next={next} active={active} setActive={setActive}>

   </CardQuestion>
   <button onClick={() => {next();{setActive(!active)}}} disabled={questionIndex >= questions.length -1 ? "true" : "" }>Suivant</button>
   <Compteur></Compteur>
   
   </>
    
  )
}


export default App
