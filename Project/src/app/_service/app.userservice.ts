import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class UserService{

    constructor(private myhttp:HttpClient){}
    // getAllData(){
    //     return this.myhttp.get("http://localhost:9088/product/getall");
    // }

    addQuestionExcel(id:any,file:File){
        let form = new FormData();
        form.append("testid",id);
        form.append("exfile",file)
        return this.myhttp.post("http://localhost:9088/addquestionsubmit",form);
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
    constructor(private myhttp:HttpClient){}
    
    updateUser(user: any){
        let form = new FormData();
        form.append("userId", user.userId);
        form.append("userName",user.userName);
        form.append("userPassword",user.userPassword);
        return this.myhttp.put("http://localhost:9088/updateusersubmit",form);

    }
}