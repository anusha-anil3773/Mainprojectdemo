import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  books:any=[]
 
  constructor(
    private apiService: ApiService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
    data={
      name:'',
      contact_number:'',
      email_id:'',
      address:'',
      location:''
      }
  

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.apiService.addofficer(this.data).subscribe(res=>{
      this.books=res
      alert('successfully added');
      this.router.navigate(['/home'])
    })
  }  
}
