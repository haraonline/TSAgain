interface Point {
    readonly x: number;
    readonly y: number;
}

// all properties of mySpot are readonly, 
// so we can use the 'as const' assertion to make the object literal immutable
const mySpot: Point = { x: 10, y: 20 } as const;