$.ajaxprefilter(function (options) {
    

    options.url = 'http://http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url)
 })