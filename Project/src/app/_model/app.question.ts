import { Test } from "./app.test";

export class Question{
    questionId:number;
    questionTitle:string;
    questionAnswer:number;
    questionOptions:string[]=[];
    questionMarks:number;
    test:Test;
}