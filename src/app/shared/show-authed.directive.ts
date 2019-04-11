import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
  } from '@angular/core';
  
  import { DataService } from './data.service';
  
  @Directive({ selector: '[appShowAuthed]' })
  export class ShowAuthedDirective implements OnInit {
      condition:boolean;
      @Input() set appShowAuthed(condition:boolean){
       // console.log(`inside directive set method -----${condition}`);
        this.condition =condition;
      }

      constructor(private dataservice:DataService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef)
        { }
      
        ngOnInit(){
         this.dataservice.currentUser.subscribe(
             (currentUser) => {
                 if(Object.keys(currentUser).length != 0){
                    console.log(`inside the isauthenticated subscriber ----${currentUser.emails[0].value}`);
                    this.show(currentUser.emails[0].value)
                 } else {
                    this.viewContainer.clear();
                 }
             })
      }

      show(currentUserEmail:string){
          if(currentUserEmail === 'ashishguptawaiting@gmail.com' || currentUserEmail === 'vivek.rai@gmail.com'){
             this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
              this.viewContainer.clear();
          }

      }

      
  }