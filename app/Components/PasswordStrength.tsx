import React from "react";
import styles from "@/app/Styles/styles.module.css";

interface PasswordStrength {
    uppercaseLetters: boolean;
    lowercaseLetters: boolean;
    numbers: boolean;
    symbols: boolean;
}

const PasswordStrengthIndicator = ({
    uppercaseLetters,
    lowercaseLetters,
    numbers,
    symbols,
} : PasswordStrength) => {

    const calculateStrengthIndicator = () => {
        let strength = 0;

        //Guard clause
        if (uppercaseLetters) strength++;
        if (lowercaseLetters) strength++;
        if (numbers) strength++;
        if (symbols) strength++;

        return strength;
    };

    const getStrengthIndicatorLabel = () => {
        const strength = calculateStrengthIndicator();

        switch(strength) {
            case 1:
                return "TOO WEAK";
            case 2:
                return "WEAK";
            case 3:
                return "MEDIUM";
            case 4:
                return "STRONG";
            default:
                return "";
        }
    };

    const getStrengthIndicatorColor = (index: number) => {
        const strength = calculateStrengthIndicator();

        if (index <= strength) {
            switch (strength) {
                case 1:
                    return styles.too_weak;
                case 2:
                    return styles.weak;
                case 3:
                    return styles.medium;
                case 4:
                    return styles.strong;
                default:
                    return styles.weak;
            }
        }
    };

    return (
        <div className={`flex items-center mr-0 gap-3 sm:size-4${styles.Strength_indicator}`}>
            <div className="opacity-70 m-auto my-1 md:text-sm/3">{getStrengthIndicatorLabel()}</div>
            <div className="flex items-center gap-1 pl-3 m-auto top-0 right-0 md:font-thin">
                <div className={`${getStrengthIndicatorColor(1)} w-2 h-6 border`}></div>
                <div className={`${getStrengthIndicatorColor(2)} w-2 h-6 border`}></div>
                <div className={`${getStrengthIndicatorColor(3)} w-2 h-6 border`}></div>
                <div className={`${getStrengthIndicatorColor(4)} w-2 h-6 border`}></div>
            </div>
        </div>
    );
};

export default PasswordStrengthIndicator;