export class contactModal {
    constructor(
        public name:string,
        public email:string,
        public phone_no:number,
        public service:string,
        public other:string,
        public comment:string
    ){}
}

export class carrerModal {
    constructor(
        public firstname:string,
        public lastname:string,
        public address:string,
        public city:string,
        public state:string,
        public zipcode:number,
        public phone_no:number,
        public email:string,
        public currentLocation:string,
        public gender:string,
        public currentEmpName:string,
        public jobTitle:string,
        public nightShift:string,
        public totalExp:string,
        public keySkills:string,
        public references:string,
    ){}
}