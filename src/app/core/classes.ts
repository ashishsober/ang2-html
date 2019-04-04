export class contactModal {
    constructor(
        public name: string,
        public email: string,
        public phone_no: number,
        public service: string,
        public other: string,
        public comment: string
    ) { }
}

export class managementModal {
    constructor(
        public name: string,
        public emailid: string,
        public position: string,
        public profileImage: string,
        public discription: string,
        public _id:string
    ) { }
}

export class jobBoardModal {
   constructor(
       public title: string,
       public location:string,
       public jobType:string,
       public experience:string,
       public requirement:any[],
       public _id:string
   ){ }
}

export class carrerModal {
    constructor(
        public firstname: string,
        public lastname: string,
        public address: string,
        public city: string,
        public state: string,
        public zipcode: number,
        public phone_no: number,
        public email: string,
        public currentLocation: string,
        public gender: string,
        public currentEmpName: string,
        public jobTitle: string,
        public nightShift: string,
        public totalExp: string,
        public keySkills: string,
        public references: string,
        public vrd_ref_number: string
    ) { }
}

export interface user_Data {
     accessToken: string;
     uid: string;
     photoUrl: string;
     emailId: string;
     displayName: string;
}

export interface metaobject {
    applicants:Object,
    application:{
        message:string,
        response_action:string
    },
    client:{
        uid:string,
        accessToken:string
    }
}