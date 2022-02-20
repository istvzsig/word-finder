class Canvas {
    c = document.createElement('canvas');
    x = this.c.getContext('2d');
    w = window.innerWidth;
    h = window.innerHeight;
    create() {
      this.c.width = this.w;
      this.c.height = this.h;
      document.body.children[0]
        .before(this.c);
    }
  }