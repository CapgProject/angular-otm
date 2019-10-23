import { Component, OnInit} from '@angular/core';
import { UserService } from './_service/app.userservice';
import {saveAs} from 'file-saver';

@Component({
    selector: 'listuser',
    templateUrl: 'app.getresult.html'
})

export class GetResultComponent implements OnInit{

    header:string;
    constructor(private service:UserService){
        console.log("In Constructor");
    }

    ngOnInit(){
        this.service.getResult().subscribe((data:string) =>this.header =data);
    }

    resultPdf(){
        this.service.resultPdf().subscribe(response => {
            const blob = new Blob([response], {type: 'application/pdf'});
            saveAs(blob, 'Result.pdf');})
    }

}