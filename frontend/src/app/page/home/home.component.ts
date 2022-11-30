import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private apiService: ApiService,private router:Router) { }

  officers: any = []
  id:any
  ngOnInit() {
    this.getData();
  }

 navigate(){
  this.router.navigate(['/addnew'])
 }


 navigatetoEdit(id:any){
  this.router.navigate([`/editdata/${id}`])
  
 }

  getData() {
    this.apiService.getofficerList().subscribe(res => {
      this.officers = res
    })
  }

  deleteofficer(id:any){
    this.apiService.deleteofficer(id).subscribe(res=>{
      this.getData()
    })
  }

}
