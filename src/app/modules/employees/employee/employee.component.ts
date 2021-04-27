import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  createAndUpdate(currentEmployee:any)
  {
      // console.log(currentEmployee);
      if(currentEmployee.id!=null)
      {
        // console.log('update');
        this.updateEmployee(currentEmployee);
        this.toastrService.success('Employee Successfully updated!')
      }else{
        console.log('Not update');
          this.createEmployee(currentEmployee);
        this.toastrService.info('Employee Successfully Created')

      }
      
  }
  updateEmployee(emp:any)
  {
      this.employeeService.updateEmployee(emp).subscribe();
  }
  createEmployee(emp:any)
  {
      this.employeeService.createEmployee(emp).subscribe();
  }
  clear(){
    this.employeeService.currentEmployee={
      firstname:'',
      lastname:'',
      designation:'',
      contact:null,
      id:null,
      address:''
    }
  }
}
