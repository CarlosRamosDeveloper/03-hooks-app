export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  totalWords: number;
  words: string[];
}

export type ScrambleWordActions =
  | { type: 'SET_GUESS'; payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'SKIP_WORD' }
  | { type: 'START_NEW_GAME'; payload: ScrambleWordsState };

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = (): ScrambleWordsState => {
  const shuffledWords = shuffleArray([...GAME_WORDS]);
  const word = shuffledWords[0];

  return {
    currentWord: word,
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(word),
    skipCounter: 0,
    totalWords: shuffledWords.length,
    words: shuffledWords,
  };
};

export const wordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordActions,
): ScrambleWordsState => {
  switch (action.type) {
    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case 'CHECK_ANSWER': {
      if (state.currentWord !== state.guess) {
        return {
          ...state,
          guess: '',
          errorCounter: state.errorCounter + 1,
          isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
        };
      }

      const newWords = state.words.slice(1);
      const newWord = newWords[0];

      return {
        ...state,
        words: newWords,
        points: state.points + 1,
        guess: '',
        currentWord: newWord,
        scrambledWord: scrambleWord(newWord),
      };
    }

    case 'SKIP_WORD': {
      if (state.skipCounter >= state.maxSkips) return state;

      const updatedWords = state.words.slice(1);
      const newWord = updatedWords[0];

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updatedWords,
        currentWord: newWord,
        scrambledWord: scrambleWord(newWord),
        guess: '',
      };
    }

    case 'START_NEW_GAME':
      return action.payload;
    default:
      return state;
  }
};
