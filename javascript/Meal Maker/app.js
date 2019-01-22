const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    get appetizers() {
      return this.appetizers;
    },
    set appetizers(app){
      this.appetizers = app;
    },
    get mains() {
      return this.mains;
    },
    set mains(ma){
      this.mains = ma;
    },
    get desserts() {
      return this.desserts;
    },
    set desserts(de){
      this.desserts = de;
    },
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
      
    }
  },

};