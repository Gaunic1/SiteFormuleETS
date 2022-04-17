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
        async getDb(id, year = false){
            const res = await this.getAlbum(id);
            this.db.images = res.filter(e => e.type == "image");
            this.db.albums = res.filter(e => e.type == "folder");

            this.db.orginalAlbums = res.filter(e => e.type == "folder");

            //gettings years
            this.db.years = this.db.albums.map(e => {
                return e.name.match(/\d{4}$/gi)[0];
            });
            this.db.years = [...new Set(this.db.years)];
            this.db.years = this.db.years.sort();

            //sorting
            if(this.db.albums.length > 1) this.db.albums = this.db.albums.sort((a,b) => b.name.localeCompare(a.name));

            //getting by year
            if(year) this.db.albums = this.db.albums.filter(e => e.name.indexOf(year) != -1);

            //removing informations in name
            this.db.albums.forEach(e => {
               e.name = e.name.replace(/^(\d+-\s*)/gi, '').replace(/\d{4}$/gi, '');
            });
        }
    }
}