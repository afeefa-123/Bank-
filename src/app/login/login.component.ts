import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //property/variable
  header="welcome to our bank ...."
  dot="....."
  accPlaceholder="Account please"
  acno=""
  pswd=""
  //database
  database:any={
    1000:{acno:1000,username:'neer',password:1000,balance:5000},
    1001:{acno:1001,username:'arun',password:1001,balance:6000},
    1002:{acno:1002,username:'anu',password:1002,balance:7000}

  }

  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    this.acno=event.target.value
    
  }
  pswdChange(event:any){
   this.pswd=event.target.value
  }
    //login(){
   // fetch acno
    //var acno=this.acno
   
    //fetch pswd
   //var pswd=this.pswd
    //let userDetails=this.database
    //if(acno in userDetails){
      //if(pswd==userDetails[acno]['password']){
       //alert('login success')
      

     //}
      //else{
        //alert('incorrect pswd')
     //}
    //}
    //else{
      //alert('user does not exist')
   //}
  //  }


  
//user defined function
//}

    login(a:any,p:any){
      console.log(a);
  // fetch acno
   var acno=a.value
  
   //fetch pswd
  var pswd=p.value
   let userDetails=this.database
   if(acno in userDetails){
     if(pswd==userDetails[acno]['password']){
      alert('login success')
     

    }
     else{
       alert('incorrect pswd')
    }
   }
   else{
     alert('user does not exist')
  }
   }


 
//user defined function
}
