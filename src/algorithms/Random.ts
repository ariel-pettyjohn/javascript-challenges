import { ALPHABET } from '../constants';

export default class Random {
    static integer (min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    static element (array: any[]): any {
        const randomIndex: number = Random.integer(0, array.length - 1);
        return array[randomIndex];
    }

    static letter (): string {
        const randomLetter: string = Random.element(ALPHABET);
        return randomLetter;
    }
}