export interface IMessage {
    content: string
    id: number
    time: string
    title: string
}

export interface IFeedback {
    content:Array<{
        text:string,
        time,
        source
    }>
    has_read
    id:number
    token:string
    user:string
}