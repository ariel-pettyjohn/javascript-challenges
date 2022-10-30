export interface ICharacterFrequencies {
    [index: string]: number
}

export interface IMergeSortCallback {
    (x: any, y: any): boolean;
}

export interface IMapCallback {
    (x: any): any
};

export interface IReduceCallback {
    (x: any, y: any): boolean
}

export interface ICallback {
    (x: any, y: any): any
}