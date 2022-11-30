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

  officers: any = []
  id:any
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  filterTerm!: string;

  constructor(private apiService: ApiService,private router:Router) { }

 
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
  onTableDataChange(event: any) {
    this.page = event;
    this.getData();
  } 
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getData();
  }
}
