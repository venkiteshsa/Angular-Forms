export class Project {
    constructor(
        public username: string,
        public projectname: string,
        public stagename: string,
        public environment: string,   
        public eventsource: string,
        public eventhandler: string,
    ) {}
}
