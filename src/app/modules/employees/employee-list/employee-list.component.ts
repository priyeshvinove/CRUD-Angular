import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    allEmployee:any;
    msg='';
  constructor(
    private employeeService:EmployeeService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  
  getAllEmployee(){
    this.employeeService.getAllEmployess().subscribe(data=>
      this.allEmployee=data
    )
  }
  deleteEmployee(id:number){
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getAllEmployee();
    })
    this.toastrService.error('Employee Successfully Deleted')
  }
  edit(emp){
    this.employeeService.currentEmployee=Object.assign({},emp);   
    this.toastrService.success('Employee Successfully Edited!')
    
  }
}
