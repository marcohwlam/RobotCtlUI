
    var joystickL = nipplejs.create({
        zone: document.getElementById('left'),
        mode: 'static',
        position: { left: '30%', top: '50%' },
        color: 'green',
        size: 200,
        lockY:true
    });
    var joystickR = nipplejs.create({
        zone: document.getElementById('right'),
        mode: 'static',
        position: { left: '70%', top: '50%' },
        color: 'red',
        size: 200,
        lockY:true
    });
    bindNipple();

    var s = function (sel) { return document.querySelector(sel); };
    var sId = function (sel) { return document.getElementById(sel); };
    // Get debug elements and map them
    var elDebug = [sId('debugL'), sId('debugR')];
    var elDump = [elDebug[0].querySelector('.dump'), elDebug[1].querySelector('.dump')];
    var els = [
        {
          position: {
              x: elDebug[0].querySelector('.position .x .data'),
              y: elDebug[0].querySelector('.position .y .data')
          },
          force: elDebug[0].querySelector('.force .data'),
          pressure: elDebug[0].querySelector('.pressure .data'),
          distance: elDebug[0].querySelector('.distance .data'),
          angle: {
              radian: elDebug[0].querySelector('.angle .radian .data'),
              degree: elDebug[0].querySelector('.angle .degree .data')
          },
          direction: {
              x: elDebug[0].querySelector('.direction .x .data'),
              y: elDebug[0].querySelector('.direction .y .data'),
              angle: elDebug[0].querySelector('.direction .angle .data')
          }
      },
      {
        position: {
            x: elDebug[1].querySelector('.position .x .data'),
            y: elDebug[1].querySelector('.position .y .data')
        },
        force: elDebug[1].querySelector('.force .data'),
        pressure: elDebug[1].querySelector('.pressure .data'),
        distance: elDebug[1].querySelector('.distance .data'),
        angle: {
            radian: elDebug[1].querySelector('.angle .radian .data'),
            degree: elDebug[1].querySelector('.angle .degree .data')
        },
        direction: {
            x: elDebug[1].querySelector('.direction .x .data'),
            y: elDebug[1].querySelector('.direction .y .data'),
            angle: elDebug[1].querySelector('.direction .angle .data')
        }
      }
  ];

    function bindNipple () {
        joystickL.on('start end', function (evt, data) {
            dump(evt.type, 0);
            debug(data, 0);
            postCtl(evt.type, data,0);
        }).on('move', function (evt, data) {
            debug(data, 0);
            postCtl(evt.type, data,0);
        }).on('dir:up plain:up dir:left plain:left dir:down ' +
            'plain:down dir:right plain:right',
            function (evt, data) {
                dump(evt.type, 0);
                postCtl(evt.type, data,0);
            }
        );

        joystickR.on('start end', function (evt, data) {
            dump(evt.type,1);
            debug(data,1);
            postCtl(evt.type, data,1);
        }).on('move', function (evt, data) {
            debug(data,1);
            postCtl(evt.type, data,1);
        }).on('dir:up plain:up dir:left plain:left dir:down ' +
            'plain:down dir:right plain:right',
            function (evt, data) {
                dump(evt.type,1);
                postCtl(evt.type, data,1);
            }
        );
    }
    function postCtl (evtType, obj, i){
      var evt = evtType;
      var side = (i==0)?"left":"right";
      console.log(obj);
      var cmd = {
        cmd : evt,
        side: side,
        dutyCycle: obj.distance,
        direction : obj.direction
      };
      $.post( $(location).attr('href') + "control", cmd);
    }

    // Print data into elements
    function debug (obj, i) {
        function parseObj(sub, el) {
            for (var i in sub) {
                if (typeof sub[i] === 'object' && el) {
                    parseObj(sub[i], el[i]);
                } else if (el && el[i]) {
                    el[i].innerHTML = sub[i];
                }
            }
        }
        setTimeout(function () {
            parseObj(obj, els[i]);
        }, 0);
    }

    var nbEvents = 0;
    function dump (evt, i) {
        setTimeout(function () {
            if (elDump[i].children.length > 4) {
                elDump[i].removeChild(elDump[i].firstChild);
            }
            var newEvent = document.createElement('div');
            newEvent.innerHTML = '#' + nbEvents + ' : <span class="data">' +
                evt + '</span>';
            elDump[i].appendChild(newEvent);
            nbEvents += 1;
        }, 0);
    }
