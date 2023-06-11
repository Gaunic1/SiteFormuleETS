import { defineStore } from "pinia";
import { config } from "../config";

export const useAlbumsStore = defineStore("albums", {
  state: () => {
    return {
      db: {
        folders: [],
        years: [],
        images: [],
      },

      api: config.apiUrl,
      drive: config.driveId,
      registeredId: [],
    };
  },
  actions: {
    alreadyDone(id) {
      return this.registeredId.includes(id);
    },

    getImagesByFolderId(id) {
      return this.db.images.filter((e) => e.folderId == id);
    },

    getByYear(year) {
      if (!year) year = this.db.years[0].title;
      return this.db.folders.filter((e) => e.year == year);
    },

    async getAlbum(id) {
      //request already done
      if (this.alreadyDone(id)) return;

      const req = await fetch(this.api.replace(":id", id));
      const res = (await req.json()).content;
      //folders or images ?
      if (id == this.drive) {
        let images = res.filter((e) => e.type == "image");
        let albums = res.filter((e) => e.type == "folder");

        //gettings years
        let years = albums.map((e) => {
          const year = e.name.match(/\d{4}$/gi)[0];
          e.year = year;
          return year;
        });
        years = [...new Set(years)];
        years = years.sort().reverse();

        //sorting
        if (albums.length > 1)
          albums = albums.sort((a, b) => b.name.localeCompare(a.name));

        //removing informations in name
        albums.forEach((e) => {
          const img = images.find((i) => i.name.includes(e.name));
          e.name = e.name.replace(/^(\d+-\s*)/gi, "").replace(/\d{4}$/gi, "");
          e.thumbnail = img ? img.url : "/static/photos/404.jpg";
        });

        //registering in store
        this.db.folders = albums;
        this.db.years = years.map((e) => {
          return { title: e };
        });
        this.registeredId.push(id);
      } else {
        let images = res.filter((e) => e.type == "image");
        images.forEach((e) => (e.folderId = id));
        this.db.images = this.db.images.concat(images);
      }
    },
  },
});
