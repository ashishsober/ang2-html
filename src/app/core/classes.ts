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
       public requirement:any[]
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

export class user_Data {
    public accessToken: string;
    public uid: string;
    public photoURL: string;
    public emailId: string;
    public displayName: string;
    constructor() { }

    public getUserInfo() {
        var info = new user_Data();
        info.accessToken = sessionStorage.getItem("accessToken");
        info.uid = sessionStorage.getItem("user_uid");
        info.photoURL = sessionStorage.getItem("photoUrl");
        info.emailId = sessionStorage.getItem("emailId");
        info.displayName = sessionStorage.getItem("displayName");
        return info;
    }

    public setUserInfo(result: any) {
        if (result != undefined) {
            sessionStorage.setItem('user_uid', result.id);
            sessionStorage.setItem('accessToken', result.accessToken);
            sessionStorage.setItem('photoUrl', result.photos === undefined ? result.photoUrl : result.photos[0].value);
            sessionStorage.setItem('emailId', result.emails === undefined ? result.emailId : result.emails[0].value);
            sessionStorage.setItem('displayName', result.displayName);
        }
    }
}