"use client"
import { FaRegCopy } from "react-icons/fa";
import styles from  "../Styles/styles.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import generatePassword from "../Utils/PasswordGenerator";
import { FiArrowRight } from "react-icons/fi";
import PasswordStrengthIndicator from "./PasswordStrength";

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

      const handleGeneratePassword = () => {
        generatePassword({passwordGen, setHandleText})
      };

      const [ value, setValue ] = useState<number>(10);
      const handleSliderChange = ( event: ChangeEvent<HTMLInputElement> ) : void => {
        let newLength = parseInt(event.target.value) 
        setValue(newLength)
        setPasswordGen({
            ...passwordGen,
            length: newLength,
          });
      };

      // background : Default Range Slider Background
    const sliderProps = {
        background: "#18171F",
        fill: "#A4FFAF",
    };

      const applyFill = (slider: any) => {
        const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	    const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
			0.1}%)`;
	    slider.style.background = bg;
      }

      useEffect(() => {
        const slider = document.getElementById(styles.slider) as HTMLInputElement;
        if (slider) {
          applyFill(slider);
        }
      });

    return (
       <div className="min-h-screen flex flex-col justify-center items-center w-screen bg-[#18171F]">
         <div className={`${styles.wrapper} ${styles.wrapper_box} w-screen min-h-screen`}>
            <div className={`container mx-auto max-w-full px-4 sm:px-6 lg:px-8 min-h-screen w-screen ${styles.container}`}>
                <div className="flex flex-col items-center mb-6">
                    <h1 className={`${styles.h1_text} text-center justify-center p-2 m-2 text-2xl`}>Password Generator</h1>
                    <div className={`${styles.password_box}`}>
                        <div className="relative mb-5">
                            <input 
                                    type="text"
                                    readOnly
                                    autoComplete="off"
                                    placeholder="P4$5W0rD!"
                                    value={handleText}
                                    onChange = {(e) => setHandleText(e.target.value)} 
                                    className={`${styles.input} ${styles.input_text} flex-grow pl-6 pr-10 lg:left-4`}
                            />
                            <button
                                type="button"
                                title=""
                                className={`${styles.input_icon} absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2`}
                                onClick={() => {
                                    if (handleText.length > 0) {
                                        navigator.clipboard.writeText(handleText);
                                        setCopied(true);
                                        setInterval(() => {
                                        setCopied(false);
                                        }, 2000);
                                    }
                                    }}>
                                <i className={`${styles.input_icon} ${styles.page_theme} space-x-2 flex flex-row gap-2 items-center`}>{copied ? 'COPIED' : ''} <span className="text-2xl"><FaRegCopy /></span></i>
                            </button>
                        </div>

                        <div className={`${styles.second_container} shadow-md mb-5`}>
                                <div className={`${styles.requirement_box} ${styles.range_container} mb-4`}>
                                    <div className={`${styles.label_container} pl-7`}>
                                        <div><label className="block" htmlFor="">Character Length</label></div>
                                        <div className={`${styles.page_theme} ${styles.characterNo} text-3xl pr-7 pt-3 mr-4`}>{value}</div>
                                    </div>
                                    <div className="pl-7">
                                        <input 
                                            type="range"
                                            name="range" 
                                            id={styles.slider}
                                            min={8}
                                            max={15}
                                            value={value}
                                            // step={5}
                                            onChange={handleSliderChange}
                                            className={`${styles.slider} ${styles.range_input}`}
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.mobile} flex flex-col space-y-2 pl-7`}>
                                    <div className={`${styles.requirement_box} flex items-center mb-4`}>
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

                                    <div className={`${styles.requirement_box} flex items-center mb-4`}>
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

                                    <div className={`${styles.requirement_box} flex items-center mb-4`}>
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

                                    <div className={`${styles.requirement_box} flex items-center mb-4`}>
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
                                    {/* Indicator */}
                                <div className={`${styles.strength_indicator} mb-4`}>
                                    <div className={`mt-3`}>
                                        <div className="mx-auto">
                                            <div className="flex mx-auto h-16 flex-row items-center justify-between ml-6 mr-6">
                                                <div className={`${styles.mob_label} mt-2`}>
                                                    <p className="block md:text-sm m-auto opacity-50 md:size-3">STRENGTH</p>
                                                </div>
                                                <div className={`${styles.mobile_indicator} mt-2`}>
                                                    <PasswordStrengthIndicator 
                                                        uppercaseLetters = {passwordGen.uppercaseLetters}
                                                        lowercaseLetters = {passwordGen.lowercaseLetters}
                                                        numbers = {passwordGen.numbers}
                                                        symbols = {passwordGen.symbols}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div>
                                <button className={`btn ${styles.generate_btn} text-2xl ml-7 mt-6 mb-10 text-center`} onClick={handleGeneratePassword}>
                                    GENERATE <span>
                                        <FiArrowRight />
                                    </span>
                                </button>
                            </div>

                        </div>
            </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Main;