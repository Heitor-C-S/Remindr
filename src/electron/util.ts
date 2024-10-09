export function isDEV(): boolean {
    return process.env.NODE_ENV === 'developement';
}