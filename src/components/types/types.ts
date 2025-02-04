// types.ts
export interface Option {
    text: string;
    effect: number;
    resultDescription: string;
    image: string;
    shipPointChange: number;
    safetyPointChange: number;
}

export interface Event {
    title: string;
    description: string;
    options: Option[];
}

export interface GameEvents {
    events: Event[];
}
