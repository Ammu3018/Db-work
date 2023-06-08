/* eslint-disable prefer-const */
/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpService } from 'libs/shared/src/lib/emp.service';



@Component({
  selector: 'nx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  displayedColumns: string[] = ['Sno','id', 'name'];
  dataSource!: MatTableDataSource<any>;
  users: any[] = []
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private empService: EmpService
  ) {
  }

  ngOnInit() {
    this.empService.getEmployee().subscribe((res: any) => {
      console.log("response:", res.employee);
      for (let item of res.employee) {
        this.users.push(item);
      }
      this.dataSource = new MatTableDataSource(this.users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


