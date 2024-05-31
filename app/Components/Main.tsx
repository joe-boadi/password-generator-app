"use client"
import { FaRegCopy } from "react-icons/fa";
import styles from  "../Styles/styles.module.css";
import { useState } from "react";
import Checkbox from "./Checkbox";
import generatePassword from "../Utils/PasswordGenerator";
import { FiArrowRight } from "react-icons/fi";

const Main = () => {

    const [passwordGen, setPasswordGen] = useState({
        length: 10,
        uppercaseLetters: false,
        lowercaseLetters: false,
        numbers: false,
        symbols: false,
      });

    const [handleText, setHandleText] = useState('');
    const [copied, setCopied] = useState(false);
      
    const handleChangeUppercase = () => {
        setPasswordGen({
          ...passwordGen,
          uppercaseLetters: !passwordGen.uppercaseLetters,
        });
      };
    
      const handleChangeLowercase = () => {
        setPasswordGen({
          ...passwordGen,
          lowercaseLetters: !passwordGen.lowercaseLetters,
        });
      };
    
      const handleChangeNumbers = () => {
        setPasswordGen({
          ...passwordGen,
          numbers: !passwordGen.numbers,
        });
      };
    
      const handleChangeSymbols = () => {
        setPasswordGen({
          ...passwordGen,
          symbols: !passwordGen.symbols,
        });
      };
    
      const setPasswordLength = (val: any) => {
        setPasswordGen({
          ...passwordGen,
          length: val,
        });
      };

      const handleGeneratePassword = () => {
        generatePassword({passwordGen, setHandleText})
      };


    return (
        <div className={`${styles.wrapper} ${styles.wrapper_box}`}>
            <h1 className={`${styles.h1_text} text-center justify-center p-3 m-3`}>Password Generator</h1>
            <div className={`${styles.container}`}>
                <div className="password_box">
                    <div className="relative">
                        <input 
                                type="text"
                                autoComplete="off"
                                placeholder="P4$5W0rD!"
                                value={handleText}
                                onChange = {(e) => setHandleText(e.target.value)} 
                                className={styles.input}
                        />
                        <button
                            type="button"
                            title=""
                            className={`${styles.input_icon} right-0`}
                            onClick={() => {
                                if (handleText.length > 0) {
                                    navigator.clipboard.writeText(handleText);
                                    setCopied(true);
                                    setInterval(() => {
                                    setCopied(false);
                                    }, 2000);
                                }
                                }}>
                            <i className={`${styles.input_icon}`}><FaRegCopy /> {copied ? 'COPIED' : ''}</i>
                        </button>
                    </div>
                        <div>
                        <div className={`${styles.requirement_box}`}>
                            <div className="grid grid-cols-2 p-2">
                                <label htmlFor="">Character Length</label><span className={`${styles.page_theme} ${styles.characterNo} `}>0</span>
                            </div>
                            <div className="">
                                <input type="range"
                                    name="" 
                                    id=""
                                    min={10}
                                    max={15} 
                                    value={passwordGen.length}
                                    onChange={(e) => setPasswordLength(e.target.value)}
                                    className={`${styles.slider_color}`}
                                />
                            </div>
                        </div>

                        <div className={`${styles.requirement_box}`}>
                            <div>
                                <Checkbox 
                                    value={passwordGen.uppercaseLetters}
                                    onChange={handleChangeUppercase}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Include Uppercase Letters</label>
                            </div>
                        </div>

                        <div className={`${styles.requirement_box}`}>
                            <div>
                                <Checkbox 
                                    value={passwordGen.lowercaseLetters}
                                    onChange={handleChangeLowercase}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Include Lowercase Letters</label>
                            </div>
                        </div>

                        <div className={`${styles.requirement_box}`}>
                            <div>
                                <Checkbox
                                    value={passwordGen.numbers}
                                    onChange={handleChangeNumbers}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Include Numbers</label>
                            </div>
                        </div>

                        <div className={`${styles.requirement_box}`}>
                            <div>
                                <Checkbox
                                    value={passwordGen.symbols}
                                    onChange={handleChangeSymbols}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Include Symbols</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={`btn ${styles.generate_btn} justify-center text-center p-3 m-4`} onClick={handleGeneratePassword}>
                            GENERATE <span>
                                <FiArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;