interface PasswordGenProps {
    passwordGen: {
      length: number;
      uppercaseLetters: boolean;
      lowercaseLetters: boolean;
      numbers: boolean;
      symbols: boolean;
    };
    setHandleText: (text: string) => void;
  }

const generatePassword = ({passwordGen, setHandleText}: PasswordGenProps) => {
  
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );

    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercaseLetters, lowercaseLetters, numbers, symbols } = passwordGen;

    const generateTheWord = (
      length: number,
      uppercaseLetters: boolean,
      lowercaseLetters: boolean,
      numbers: boolean,
      symbols: boolean,
    ) => {
      const availableCharacters = [
        ...(lowercaseLetters ? lowerCaseLetters : []),
        ...(uppercaseLetters ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];

      const shuffleArray = (array:any) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandleText(characters.join(''));
      return characters;
    };

    generateTheWord(length, uppercaseLetters, lowercaseLetters, numbers, symbols);
  }

  export default generatePassword;