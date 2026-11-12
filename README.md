# Brutal.Tattoo (One Page)

Sitio de una sola página para un estudio de tatuajes. Hecho solo con **React + Vite**:
sin backend, sin `react-router-dom` y sin librerías de animación.

## Cómo funciona el contacto (sin registro)

- **Formulario**: solo la idea es obligatoria; nombre y estilo son opcionales. Al enviar,
  se abre WhatsApp con el mensaje ya escrito. No hay correo, cuenta ni servidor.
- **Botón flotante**: abre el chat directo con un mensaje base.
- El texto del formulario se guarda como borrador en el navegador de la persona
  (`localStorage`) para que no lo pierda; nunca se envía a ningún servidor.

## Comentarios (Better Comments)

Con la extensión _Better Comments_ de VS Code se ven con color:

| Marca      | Uso                       |
| ---------- | ------------------------- |
| `// *`     | Explicación o dato clave  |
| `// !`     | Advertencia importante    |
| `// ?`     | Decisión de diseño o duda |
| `// TODO:` | Pendiente                 |

## Compatibilidad con dispositivos antiguos

- El build apunta a Chrome 64, Safari 12, Firefox 62 y Edge 79 (`vite.config.js`).
- Las grillas usan `flexbox` como base y mejoran con `CSS Grid` mediante `@supports`.
- Los valores modernos (`clamp()`, `env()`, `text-wrap`) tienen un valor de respaldo.
- Si el navegador no tiene `IntersectionObserver`, el contenido se muestra sin animar.
- Las imágenes se redujeron a 900 px de ancho (de ~4.5 MB a ~350 KB en total) y cargan
  de forma diferida.
- Nota: React 19 no funciona en Internet Explorer ni en navegadores de antes de ~2018.

```
                                 .',;;;,'. ..,,;;;,'.
                             ..','......';;;,'......,''.
                           .''.........';:cll;'''.......,,.
                        ..'...........'ccddolo:'..........,:,.
                       '.............',:coddoc;,,,;;''.....,;:;.
                      ,........',;;;;;;,,'.......',;;;:::'';;;;;:.
                     , .....';c;,.......................';:c;;;;;:c.
                    ; ....';c;.............................':c;;;;:l.
                   ;  . .,c;.................................':c;;;co.
                  ..    .:'................................... 'c::clo.
                  ; .   ;.................''........'..........  :olllo
                 ,.,;; ,.. ..............';;...,'...''.......     'olll;
                 :.;;;'.     .......'....;;;,.';;'..','......     ..olld
                ,';;c;.        ... , . .,;,'o::.;;.;,..  .. ..  ,.,;,lol;  ..
                c;:;''......      ,;    .. ::.k;.. ',;.; ''.....,;;;::clldod.
              .':,'''..';;,..... ,x;; .. . xcooc. ..o,l.cc:;,;';;;;;:::lokd:'.
           .';,,,;,..',;;,.....';doddlcocc'kdxcl;;'kcxcx:kodl;:;:;;:::lcoxdo;.'
          ;l:c;;,..,:;;;;..'.',:oddxddkcd:odkx.odx;oxoOooldxxlcl::;;;:codkoc:..
        .loollc',;cc::;;;,,',:cxkkkxkOoddldxx'.Oxo:OxxkokxkOxdxdcc:;;;;:odkkko.
        dxddololocl::l:;;;c:ldkdkkxoxdo:lxkl..oxoooddc:OOxkldxddxcdc::;;:cddxO.
        kxxdddldooool:;;:lookxx00KKOOc.,ll'..ld:dloooOXWMMWXOkxdxxxxl:cc:cclokd
        0xddxoddxdoc;;:cdocdOXKWMNWMW0,.,...:,;c,''dKXMOxl0kOXollkkdxxdooclloxd
       .oxkooxdkxl:;:cdkx'.cNdkWWl..:ko............xlXWN:.:o.l'.'xlo,:lxxxllxx'
       .oOllxdkxccldkxdKo'  . KKWN0dOc...............KkNo00x '..,cod'.',:dkolx
        ,Kllkkkldkkddxl0;c   ,ddkcdxO;...............;odld:;,'.',c:xc....'okxo
         .'.llc,''';oxdl,..    ,;;;,'.........................':;ooxx......dck:
            :,.....lldkoc,..   ............. ,'...............d:lllc0'....'llkl
            c.....;,dxdkodol;   ............................'oolllllk:....ccdo:
           ;.....''lldxdlxxxOl   ..........:'..':..........'xlllllllxl...:llo.
         .,.......llodxlxdxdOkl  ..........;lccl;.........'oxlllllllxo.':o::l
        .,......'olodxlodxxxxxxk. ............'..........;doxllllllcxd:o:,',:
       ,'.....';olodxllxdddxxxkkx:. ...................:oxodxllllllxxdc'..'c'
      ,''....;ddllxodlxlxxooxxxxxll'................,clxkxlxxllllckOx:....oo
    .;;;..'.:xdllxlxloddoxxcxxxdxd;..';,,,'.....,:c:collkdxxdollloOOo,...,k'
   .;:c..,'lxdllxlxllxlxxlxlxdddxk.......',::cll:;'.xxllxxxodxlllx0d;''.'cl
  ';ol.':ooxdlldldollxcxxlxldoxxl............''....,kdoldxxxxxllxKx;',',;o
 ,::o''oodkxllodlxllxlolxoxclc,....................cdxxoldxxxxkdOx;,,';,
.::':'oooOkollxldoolo::::. ,,.....................'c';lxxoxxxxkKo;,;,:'
oc c'ldolOdlld:;,'.....;;'..,'....................c,....;:;oocOl;,;,;.
k..c;xxcdkl;'...........','  ..''.................:.........loxc;;::,.....
0 ::lldlx:.................,  ..':'''......................,dxoo::........'..
. ,dld:d;.................:''   ..''.,,''',,.........,,''...xo;,,;...........'.
   odo:l .................'',    ...''......,,......,.......l:  .,;............'
   .col: ..................;,      ....'...................;.,   .;,...........;
     ..; ..................:'        .....................'.;     ':'...........
       ; ..................c..          .......'...........'..     .c'..........
       ;  ..............';'c'.             .....,,....,...          .l,.,......'
       '   .............l'.::                    .....              ..ll.......'
        :   ............,:,,:.                                       ..d'......,
        ..  .............lc';..                                        .c......l
         ,   ............;cc...                                         .:.....c
          ,  .............cc'...                                         .;....'
          ..  ............'l.....                                      ....;...'
           ,  .............;;.. .                            ..       . ...:...'
           ..  .............c . . .                 .       ......... . ...c...'
            ,  .............;'. ..............  ..................... ....;,...'
            ..  .............l..................'............'...........':....'
             ,  .............c'.................................. ......,;.....'
             ..  ............'c.....'.......................'..........,:......'

```
