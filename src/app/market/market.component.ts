import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-market',
  // templateUrl: './market.component.html',
  templateUrl: './trading.html',
  styleUrls: ['../../assets/css/styles.css',
  '../../assets/css/bootstrap.min.css',
  '../../assets/css/default-css.css',
  '../../assets/css/font-awesome.min.css',
  '../../assets/css/metisMenu.css',
  '../../assets/css/owl.carousel.min.css',
  '../../assets/css/responsive.css',
  '../../assets/css/slicknav.min.css',
  '../../assets/css/styles.css',
  //'../../assets/css/themify-icons.css',
  '../../assets/css/typography.css',


]
})
export class MarketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( ()=>{
      window.initLineChart(); 
      window.initBarChart();
      
    });
}
