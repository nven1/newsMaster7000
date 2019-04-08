export class Article {

    constructor (
        private id:number,
        private title:string,
        private category:Array<string>,

        private shortDescription:string,
        private tldr:Array<string>,
        private paragraphs:Array<object>,

        private thumbnail:string,
        private gallery:Array<String>,

        private tags:Array<string>,
        private author:string,
        private date:string
    ) {

    }
}

