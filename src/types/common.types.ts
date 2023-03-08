export interface IError extends Error{
    status:number
}

export interface IMessage{
    message:string;
}

export interface IUserCreate<T> extends IMessage{
    data: T;
}

interface IIndex{
    [index: string]:any
}
export interface IRequest extends IIndex {

}