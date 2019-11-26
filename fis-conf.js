; (function ($) {
  const CONFIG = {
    ignore: [
      '.**',
      '.{git,svn,hg,CVS,idea,sass-cache,vscode}/**',
      '{node_modules}/**',
      '*.{bat,cmd,sh,tmp,bak}',
      'Thumbs.db',
      'fis-conf.js',
    ],
    USE_RELATIVE: true
  }

  $.set('project.ignore', CONFIG.ignore);


  $.hook('relative');
  $.match('*', {
    relative: CONFIG.USE_RELATIVE
  });

  $.match('snippets/**', {
    release: false  //设置 release 为 false，不再产出此文件
  });

  $.match('*.css', {
    useSprite: true,
    optimizer: $.plugin('clean-css'),
  });


  $.match('*.less', {
    parser: $.plugin('less'),
    rExt: '.css'
  });

  $.match('*.{sass, scss}', {
    parser: $.plugin('node-sass'),
    rExt: '.css'
  })

  // 加 md5
  $.match('static/styles/*.{css, scss}', {
    useHash: true,
    relative: '/',
    release: '$0',
  });

  $.match('_*', {
    release: false  //设置 release 为 false，不再产出此文件
  });

  $.match('*.js', {
    optimizer: $.plugin('uglify-js')
  });

  $.match('*.png', {
    optimizer: $.plugin('png-compressor')
  });

})(fis)
