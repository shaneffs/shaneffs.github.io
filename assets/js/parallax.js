!function(a,b,c,d){function s(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=e,this.init()}var e="parallaxify",f=30,g={positionProperty:"position",horizontalParallax:!0,verticalParallax:!0,parallaxBackgrounds:!0,parallaxElements:!0,responsive:!1,useMouseMove:!0,useGyroscope:!0,alphaFilter:.9,motionType:"natural",mouseMotionType:"gaussian",inputPriority:"mouse",motionAngleX:80,motionAngleY:80,adjustBasePosition:!0,alphaPosition:.05},h={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[n]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},i=function(a,b){return 1/(1+Math.exp(-(.07056*b*(3^a))-1.5976*b*a))},j=function(a,b,c){return null===b?a:("undefined"==typeof c&&(c=.5),c*a+(1-c)*b)},k=[],l={linear:function(a,b){return a<=-b?1:a>=b?-1:-a/b},natural:function(a,b){return a<=-b?1:a>=b?-1:(k["n"+b]===d&&(k["n"+b]=Math.tan(.01745*b)),-Math.tan(.01745*a)/k["n"+b])},performance:function(a,b){return a<=-b?1:a>=b?-1:(k["p"+b]===d&&(k["p"+b]=b/90+4.2*Math.pow(b/90,7)),-(a/90+4.2*Math.pow(a/90,7))/k["p"+b])},gaussian:function(a,b){return 1-2*i(a/90,135/b)}},m=function(){var e,b=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,c=a("script")[0].style,d="";for(e in c)if(b.test(e)){d=e.match(b)[0];break}return"WebkitOpacity"in c&&(d="Webkit"),"KhtmlOpacity"in c&&(d="Khtml"),function(a){return d+(d.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),n=m("transform"),o=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,p=o?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},q=o?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},r=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/f)};s.prototype={init:function(){this.options.name=e+"_"+Math.floor(1e9*Math.random()),this.tilt={beta:0,gamma:0},this._defineElements(),this._defineGetters(),this._defineSetters(),this._detectMobile(),this._detectMotionType(),this._detectViewport(),this._handleWindowLoadAndResize(),this.refresh({firstLoad:!0}),this._startAnimation()},_defineElements:function(){this.$element=a(this.element===c.body||this.element===b?"body":this.element),this.$viewportElement=a(b)},_defineGetters:function(){var a=this,b=l[a.options.motionType],c=l[a.options.mouseMotionType];this._getMoveHorizontal=function(){if(this.useMouseMove&&null!==this.clientX&&this.clientX!==this.oldClientX)return c(this.options.motionAngleX*(1-2*this.clientX/this.viewportWidth),this.options.motionAngleX);if(this.useSensor&&null!==this.beta&&null!==this.gamma){var a=this.tilt;return this.viewportLandscape?this.viewportFlipped?b(-a.beta,this.options.motionAngleX):b(a.beta,this.options.motionAngleX):this.viewportFlipped?b(-a.gamma,this.options.motionAngleX):b(a.gamma,this.options.motionAngleX)}return this.useSensor=!1,c(this.options.motionAngleX*(1-2*this.oldClientX/this.viewportWidth),this.options.motionAngleX)},this._getMoveVertical=function(){if(this.options.useMouseMove&&null!==this.clientY&&this.clientY!==this.oldClientY)return c(this.options.motionAngleY*(1-2*this.clientY/this.viewportHeight),this.options.motionAngleY);if(this.useSensor&&null!==this.beta&&null!==this.gamma){var a=this.tilt;return this.viewportLandscape?this.viewportFlipped?b(-a.gamma,this.options.motionAngleY):b(a.gamma,this.options.motionAngleY):this.viewportFlipped?b(-a.beta,this.options.motionAngleY):b(a.beta,this.options.motionAngleY)}return this.useSensor=!1,c(this.options.motionAngleY*(1-2*this.oldClientY/this.viewportHeight),this.options.motionAngleY)}},_defineSetters:function(){var a=this,b=h[a.options.positionProperty];this._setPosition=b.setPosition||function(c,d,e,f,g){a.options.horizontalParallax&&b.setLeft(c,d,e),a.options.verticalParallax&&b.setTop(c,f,g)}},refresh:function(c){c&&c.firstLoad||this._reset(),this._findElements(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).on("load",function(){var b=a("body");oldLeft=b.scrollLeft(),oldTop=b.scrollTop(),b.scrollLeft(oldLeft+1),b.scrollTop(oldTop+1),b.scrollLeft(oldLeft),b.scrollTop(oldTop)})},_detectViewport:function(){this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.useSensor&&(this.viewportFlipped=180===b.orientation,this.viewportLandscape=90===Math.abs(b.orientation))},_detectMobile:function(){var a=navigator.userAgent||navigator.vendor||b.opera;this.isMobile=/(bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|playbook|plucker|pocket|psp|series(4|6)0|silk|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))},_detectMotionType:function(){this.useSensor=!1,this.useSensorWebkit=!1,this.useSensorMoz=!1,this.useMouseMove=!1,this.options.useGyroscope&&(this.isMobile||"gyroscope"===this.options.inputPriority)&&(this.useSensorWebkit=b.DeviceOrientationEvent!==d,this.useSensorMoz=b.OrientationEvent!==d,this.useSensor=this.useSensorWebkit||this.useSensorMoz),this.options.useMouseMove&&!this.isMobile&&(this.useMouseMove=this.$viewportElement.mousemove!==d)},_findElements:function(){var b=this;if(this.elements!==d)for(var c=this.elements.length-1;c>=0;c--)this.elements[c].$element.data("parallaxify-ElementIsActive",d);this.elements=[],this.options.parallaxElements&&this.$element.find("[data-parallaxify-range],[data-parallaxify-range-x],[data-parallaxify-range-y]").each(function(c){var e=a(this);if(e.data("parallaxify-ElementIsActive")){if(e.data("parallaxify-ElementIsActive")!==this)return}else e.data("parallaxify-ElementIsActive",this);e.data("parralaxify-originalLeft")?(e.css("left",e.data("parallaxify-originalLeft")),e.css("top",e.data("parallaxify-originalTop"))):(e.data("parallaxify-originalLeft",e.css("left")),e.data("parallaxify-originalTop",e.css("top"))),b.elements.push({$element:e,originalPositionLeft:e.position().left,originalPositionTop:e.position().top,parallaxDistanceX:e.data("parallaxify-range-x")!==d?e.data("parallaxify-range-x"):e.data("parallaxify-range")!==d?e.data("parallaxify-range"):0,parallaxDistanceY:e.data("parallaxify-range-y")!==d?e.data("parallaxify-range-y"):e.data("parallaxify-range")!==d?e.data("parallaxify-range"):0,width:e.outerWidth(!0),height:e.outerHeight(!0)})})},_findBackgrounds:function(){var c,b=this;this.backgrounds=[],this.options.parallaxBackgrounds&&(c=this.$element.find("[data-parallaxify-background-range],[data-parallaxify-background-range-x],[data-parallaxify-background-range-y]"),(this.$element.data("parallaxify-background-range")||this.$element.data("parallaxify-background-range-x")||this.$element.data("parallaxify-background-range-y"))&&(c=c.add(this.$element)),c.each(function(){var c=a(this),e=q(c);if(c.data("parallaxify-backgroundIsActive")){if(c.data("parallaxify-backgroundIsActive")!==this)return}else c.data("parallaxify-backgroundIsActive",this);c.data("parralaxify-backgroundOriginalLeft")?p(c,c.data("parallaxify-backgroundOriginalLeft"),c.data("parallaxify-backgroundOriginalTop")):(c.data("parallaxify-backgroundOriginalLeft",e[0]),c.data("parallaxify-backgroundOriginalTop",e[1])),b.backgrounds.push({$element:c,originalValueLeft:e[0],originalValueTop:e[1],originalBackgroundPositionLeft:isNaN(parseInt(e[0],10))?0:parseInt(e[0],10),originalBackgroundPositionTop:isNaN(parseInt(e[1],10))?0:parseInt(e[1],10),originalPositionLeft:c.position().left,originalPositionTop:c.position().top,parallaxDistanceX:c.data("parallaxify-background-range-x")!==d?c.data("parallaxify-background-range-x"):c.data("parallaxify-background-range")!==d?c.data("parallaxify-background-range"):0,parallaxDistanceY:c.data("parallaxify-background-range-y")!==d?c.data("parallaxify-background-range-y"):c.data("parallaxify-background-range")!==d?c.data("parallaxify-background-range"):0})}))},_reset:function(){var a,b,c,d,e;for(e=this.elements.length-1;e>=0;e--)a=this.elements[e],b=a.$element.data("parallaxify-originalLeft"),c=a.$element.data("parallaxify-originalTop"),this._setPosition(a.$element,b,b,c,c),a.$element.data("parallaxify-originalLeft",null).data("parallaxify-originalLeft",null).data("parallaxify-elementIsActive",null).data("parallaxify-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("parallaxify-backgroundOriginalLeft",null).data("parallaxify-backgroundOriginalTop",null).data("parallaxify-backgroundIsActive",null),p(d.$element,d.originalValueLeft,d.originalValueTop)},destroy:function(){this._reset(),this.useMouseMove&&this.$viewportElement.unbind("mousemove."+this.name),this.useSensorWebkit&&b.removeEventListener("deviceorientation",this._handleSensorWebkit,!1),this.useSensorMoz&&b.removeEventListener("MozOrientation",this._handleSensorMoz,!1),a(b).unbind("load."+this.name).unbind("resize."+this.name).unbind("orientationchange."+this.name)},_processSensorData:function(){if(this.useSensor){var a=this.beta,b=this.gamma,c=0,e=0;a>90&&(a-=180),b>180&&(b-=360),this.initialBeta===d&&null!==a&&(this.initialBeta=a,this.useSensor&&"gyroscope"===this.options.inputPriority&&(this.useMouseMove=!1,this.useMouseMove&&this.$viewportElement.unbind("mousemove."+this.name))),this.initialGamma===d&&null!==b&&(this.initialGamma=b,this.useSensor&&"gyroscope"===this.options.inputPriority&&(this.useMouseMove=!1,this.useMouseMove&&this.$viewportElement.unbind("mousemove."+this.name))),this.options.adjustBasePosition&&this.initialGamma!==d&&this.initialBeta!==d&&(b-this.initialGamma<-180?this.initialGamma=j(b+360,this.initialGamma,this.options.alphaPosition):b-this.initialGamma>180?this.initialGamma=j(b-360,this.initialGamma,this.options.alphaPosition):this.initialGamma=j(b,this.initialGamma,this.options.alphaPosition),a-this.initialBeta<-90?this.initialBeta=j(a+180,this.initialBeta,this.options.alphaPosition):a-this.initialBeta>90?this.initialBeta=j(a-180,this.initialBeta,this.options.alphaPosition):this.initialBeta=j(a,this.initialBeta,this.options.alphaPosition)),c=this.initialBeta!==d?a-this.initialBeta:a,e=this.initialGamma!==d?b-this.initialGamma:b,c>100?c-=180:c<-100&&(c+=180),e>200?e-=360:e<-200&&(e+=360),c=j(c,this.tilt.beta,this.options.alphaFilter),e=j(e,this.tilt.gamma,this.options.alphaFilter),this.tilt.beta=c,this.tilt.gamma=e}},_repositionElements:function(){var c,d,e,f,g,h,i,a=this._getMoveHorizontal(),b=this._getMoveVertical();if(this.currentMoveHorizontal!==a||this.currentMoveVertical!==b||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentMoveHorizontal=a,this.currentMoveVertical=b,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,i=this.elements.length-1;i>=0;i--)c=this.elements[i],g=this.options.horizontalParallax?Math.floor(a*c.parallaxDistanceX/2)+c.originalPositionLeft:c.originalPositionLeft,h=this.options.verticalParallax?Math.floor(b*c.parallaxDistanceY/2)+c.originalPositionTop:c.originalPositionTop,this._setPosition(c.$element,g,c.originalPositionLeft,h,c.originalPositionTop);for(i=this.backgrounds.length-1;i>=0;i--)d=this.backgrounds[i],e=this.options.horizontalParallax?Math.floor(a*d.parallaxDistanceX/2)+d.originalBackgroundPositionLeft+"px":d.originalValueLeft,f=this.options.verticalParallax?Math.floor(b*d.parallaxDistanceY/2)+d.originalBackgroundPositionTop+"px":d.originalValueTop,p(d.$element,e,f)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()}),d.bind("orientationchange."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},_startAnimation:function(){var a=this,c=!1;this.beta=0,this.gamma=0,this.clientX=this.oldClientX=Math.round(a.viewportWidth/2),this.clientY=this.oldClientY=Math.round(a.viewportHeight/2);var e=function(){a._processSensorData(),a._repositionElements(),c=!1},f=function(){c||(r(e),c=!0)};this._handleSensorWebkit=function(b){a.gamma=b.gamma,a.beta=b.beta,f()},this._handleSensorMoz=function(b){a.gamma=180*b.x,a.beta=b.y*-90,f()},this._handleMouseMove=function(b){a.oldClientX=a.clientX,a.oldClientY=a.clientY,b.clientX!==d?a.clientX=b.clientX:a.clientX=b.pageX,b.clientY!==d?a.clientY=b.clientY:a.clientY=b.pageY,f()},this.useSensorWebkit?b.addEventListener("deviceorientation",a._handleSensorWebkit,!1):this.useSensorMoz&&b.addEventListener("MozOrientation",a._handleSensorMoz,!1),this.useMouseMove&&this.$viewportElement.bind("mousemove."+this.name,a._handleMouseMove),f()}},a.fn[e]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+e)||a.data(this,"plugin_"+e,new s(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+e);d instanceof s&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+e,null)}):void 0},a[e]=function(c){var d=a(b);return d[e].apply(d,Array.prototype.slice.call(arguments,0))},a[e].positionProperty=h,a[e].motionType=l,b[e]=s}(jQuery,this,document);