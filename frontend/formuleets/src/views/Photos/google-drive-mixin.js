export default {
    name: "GoogleDriveMixin",
    data(){
        return {
            api: "https://formuleets-api.herokuapp.com/album/:id",
            drive: "1UJ4PiRfyhPelXacznccRoGBPXLDEDvCb",

            db: {
                images: [],
                albums: []
            }
        }
    },
    methods: {
        async getAlbum(id){
            const req = await fetch(this.api.replace(":id", id));
            const rep = await req.json();
            return rep.content;
        },
        async getDb(id){
            const res = await this.getAlbum(id);
            this.db.images = res.filter(e => e.type == "image");
            this.db.albums = res.filter(e => e.type == "folder");
        }
    }
}