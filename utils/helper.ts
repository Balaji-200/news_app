export const generateId = (): string => {
    let result: string = "";
    let characters: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength: number = characters.length;
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const parseDate = (d: string): Date => {
    let millis: number = Date.parse(d);
    let date: Date = new Date(millis);
    return date
}