import { OnInit } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Contact} from '../../../data/contact';
import {ContactService} from '../../../services/contact.service';
import {NgbdSortableHeader, SortEvent} from '../../../services/sortable.directive';

@Component({
  selector: 'app-contract-information',
  templateUrl: './contract-information.component.html',
  styleUrls: ['./contract-information.component.scss']
})
export class ContractInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
