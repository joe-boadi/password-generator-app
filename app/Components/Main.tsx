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
        <div className={`${styles.wrapper} ${styles.wrapper_box} mb-4`}>
            <h1 className={`${styles.h1_text} text-center justify-center p-3 m-3`}>Password Generator</h1>
            <div className={`${styles.container}`}>
                <div className={`${styles.password_box}`}>
                    <div className="relative mb-5">
                        <input 
                                type="text"
                                autoComplete="off"
                                placeholder="P4$5W0rD!"
                                value={handleText}
                                onChange = {(e) => setHandleText(e.target.value)} 
                                className={`${styles.input} ${styles.input_text} pl-6 pr-10 left-4`}
                        />
                        <button
                            type="button"
                            title=""
                            className={`${styles.input_icon} absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2`}
                            onClick={() => {
                                if (handleText.length > 0) {
                                    navigator.clipboard.writeText(handleText);
                                    setCopied(true);
                                    setInterval(() => {
                                    setCopied(false);
                                    }, 2000);
                                }
                                }}>
                            <i className={`${styles.input_icon} ${styles.page_theme} text-2xl space-x-2`}><FaRegCopy /> {copied ? 'COPIED' : ''}</i>
                        </button>
                    </div>

                    <div className={`${styles.second_container} mb-5`}>
                        <div className={`${styles.requirement_box} ${styles.range_container}`}>
                                <div className={`${styles.label_container} pl-7`}>
                                    <label htmlFor="">Character Length</label><span className={`${styles.page_theme} ${styles.characterNo} text-3xl pr-7`}>0</span>
                                </div>
                                <div className="pl-7">
                                    <input type="range"
                                        name="" 
                                        id=""
                                        min={10}
                                        max={15}
                                        value={passwordGen.length}
                                        onChange={(e) => setPasswordLength(e.target.value)}
                                        className={`${styles.slider_color} ${styles.range_input}`}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 pl-7">
                            <div className={`${styles.requirement_box} flex items-center`}>
                                <div>
                                    <Checkbox 
                                        value={passwordGen.uppercaseLetters}
                                        onChange={handleChangeUppercase}
                                        className="mr-2"
                                    />
                                </div>
                                <div className="pl-4">
                                    <label htmlFor="">Include Uppercase Letters</label>
                                </div>
                            </div>

                            <div className={`${styles.requirement_box} flex items-center`}>
                                <div>
                                    <Checkbox 
                                        value={passwordGen.lowercaseLetters}
                                        onChange={handleChangeLowercase}
                                        className="mr-2"
                                    />
                                </div>
                                <div className="pl-4">
                                    <label htmlFor="">Include Lowercase Letters</label>
                                </div>
                            </div>

                            <div className={`${styles.requirement_box} flex items-center`}>
                                <div>
                                    <Checkbox
                                        value={passwordGen.numbers}
                                        onChange={handleChangeNumbers}
                                        className="mr-2"
                                    />
                                </div>
                                <div className="pl-4">
                                    <label htmlFor="">Include Numbers</label>
                                </div>
                            </div>

                            <div className={`${styles.requirement_box} flex items-center`}>
                                <div>
                                    <Checkbox
                                        value={passwordGen.symbols}
                                        onChange={handleChangeSymbols}
                                        className="mr-2"
                                    />
                                </div>
                                <div className="pl-4">
                                    <label htmlFor="">Include Symbols</label>
                                </div>
                            </div>
                            </div>
                        <div>
                            <button className={`btn ${styles.generate_btn} justify-center text-center p-3 m-4 pl-4 mb-4`} onClick={handleGeneratePassword}>
                                GENERATE <span>
                                    <FiArrowRight />
                                </span>
                            </button>
                        </div>

                    </div>
                       
                </div>
            </div>
        </div>
    )
}

export default Main;