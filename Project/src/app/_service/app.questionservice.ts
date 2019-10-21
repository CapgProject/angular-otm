import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class QuestionService{

    constructor(private myhttp:HttpClient){}

    addQuestionExcel(id:any,file:any){
        let form = new FormData();
        form.append("testid",id);
        form.append("exfile",file)
        return this.myhttp.post("http://localhost:9088/addquestionsubmit",{"exfile":form});
    }

    addQuestionForm(id:number, question:any){
        let form = new FormData();
        form.append("questionTitle",question.questionTitle);
        form.append("questionOptions",question.questionOptions);
        form.append("questionAnswer",question.questionAnswer);
        form.append("questionMarks",question.questionMarks);
        return this.myhttp.post("http://localhost:9088/addsinglequestion?testid="+id,form);
    }

    deleteQuestion(id:number){
        return this.myhttp.delete("http://localhost:9088/removequestionsubmit?questionid="+id);
    }

    showAllQuestions(id:number){
        return this.myhttp.get("http://localhost:9088/listquestionsubmit?testId="+id);
    }

    searchQuestion(id:number){
        return this.myhttp.get("http://localhost:9088/searchquestion?id="+id);
    }

    updateQuestion(question:any){
        let form = new FormData();
        form.append("questionTitle",question.questionTitle);
        form.append("questionOptions",question.questionOptions);
        form.append("questionMarks",question.questionMarks);
        form.append("questionAnswer",question.questionAnswer);
        return this.myhttp.put("http://localhost:9088/updatequestionsubmit",form);
    }
}