export interface job_board {
    title:string;
    location:string;
    jobType:string;
    jobId:string;
    experience:string;
    requirement:Array<string>;
    _id:string;
}


export class jobBoardModal {
    constructor(
        public _id: string,
        public title: string,
        public location: string,
        public jobType: string,
        public jobId:string,
        public experience: string,
        public requirement: any[],
        
    ) { }
}