export interface Action<T>{
    type: string,
    data: T
}
export interface Text{
    id: string,
    text: string
}
export interface Num{
    id: string,
    num: number
}
export interface RootState{
    textSlice: Text,
    counterSlice: Num
}
