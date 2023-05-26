export default class chat {
        name: string;
        secret: string;
        group: number;
        username: string;

        constructor(name: string, secret: string, group: number, username?: string){
                this.name = name;
                this.secret = secret;
                this.group = group;
                if(username) {
                        this.username = username;
                }else{
                        this.username = '';
                }
        }
}