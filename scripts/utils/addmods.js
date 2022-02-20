function addMods(mods) {
  mods.forEach(mod => {
      const basedir = './scripts/mods/';
      const script = document.createElement('script');
      script.src = basedir + mod + '.js'
      document.body.lastChild.before(script);
  });
}