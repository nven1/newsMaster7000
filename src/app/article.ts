export class Article {
/*     title:string;
    category:string;

    shortDescription:string;
    tldr:string;
    paragraphs:Array<string>;

    thumbnail:string;
    gallery:Array<String>;

    tags:Array<string>;

    author:string;
    date:Date; */

    constructor (
        private id:number,
        private title:string,
        private category:string,

        private shortDescription:string,
        private tldr:Array<string>,
        private paragraphs:Array<string>,

        private thumbnail:string,
        private gallery:Array<String>,

        private tags:Array<string>,
        private author:string,
        private date:string
    ) {

    }
}

