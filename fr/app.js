
const app = new PIXI.Application({ background: '#000000', width: 1310, height: 603 });
document.body.appendChild(app.view);

window.WebFontConfig = {
    google: {
        families: ['Rubik'],
    },
    active() {
        init();
    },
};

(function() {
    const wf = document.createElement('script');
    wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
    wf.type = 'text/javascript';
    wf.async = 'true';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
}());

function init() {
    const welcome = new PIXI.Text(
        'Bienvenue à RFL8OSX', {
            fontFamily: 'Rubik',
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#7856ff',
            align: 'middle',
        }
    );
    welcome.position.set(45, 45);
    app.stage.addChild(welcome);
}

const demotext = new PIXI.Text(
    'Utilisateur démo', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
demotext.position.set(825, 35);
app.stage.addChild(demotext);

const notetext = new PIXI.Text(
    'Note: Appuyez sur ce carré violet pour revenir à la sélection de la langue ->', {
        fontFamily: 'Rubik',
        fontSize: 15,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
notetext.position.set(610, 75);
app.stage.addChild(notetext);

const demopfp = PIXI.Sprite.from('../assets/pfp.png');
demopfp.anchor.set(0);
demopfp.x = 1170;
demopfp.y = 25;
demopfp.height = 90;
demopfp.width = 90;
demopfp.interactive = true;
demopfp.cursor = "pointer";
demopfp.on("pointerdown", back)
app.stage.addChild(demopfp);

const gamehomebutton = PIXI.Sprite.from('../assets/gamehome.png');
gamehomebutton.anchor.set(0);
gamehomebutton.x = 45;
gamehomebutton.y = 130;
gamehomebutton.height = 200;
gamehomebutton.width = 200;
gamehomebutton.interactive = true;
gamehomebutton.cursor = "pointer";
gamehomebutton.on("pointerdown", gamehome)
app.stage.addChild(gamehomebutton);

const gamehometext = new PIXI.Text(
    'Jeux', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
gamehometext.position.set(50, 280);
app.stage.addChild(gamehometext);

const apphomebutton = PIXI.Sprite.from('../assets/apphome.png');
apphomebutton.anchor.set(0);
apphomebutton.x = 45;
apphomebutton.y = 360;
apphomebutton.height = 200;
apphomebutton.width = 200;
apphomebutton.interactive = true;
apphomebutton.cursor = "pointer";
apphomebutton.on("pointerdown", apphome)
app.stage.addChild(apphomebutton);

const apphometext = new PIXI.Text(
    'Apps', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
apphometext.position.set(50, 510);
app.stage.addChild(apphometext);

const timelinehomebutton = PIXI.Sprite.from('../assets/timelinehome.png');
timelinehomebutton.anchor.set(0);
timelinehomebutton.x = 260;
timelinehomebutton.y = 130;
timelinehomebutton.height = 430;
timelinehomebutton.width = 200;
timelinehomebutton.interactive = true;
timelinehomebutton.cursor = "pointer";
timelinehomebutton.on("pointerdown", timelinehome)
app.stage.addChild(timelinehomebutton);

const timelinehometext = new PIXI.Text(
    'Ligne du temps', {
        fontFamily: 'Rubik',
        fontSize: 25,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
timelinehometext.position.set(265, 525);
app.stage.addChild(timelinehometext);

const notificationhomebutton = PIXI.Sprite.from('../assets/notifyhome.png');
notificationhomebutton.anchor.set(0);
notificationhomebutton.x = 477;
notificationhomebutton.y = 130;
notificationhomebutton.height = 430;
notificationhomebutton.width = 200;
notificationhomebutton.interactive = true;
notificationhomebutton.cursor = "pointer";
notificationhomebutton.on("pointerdown", notifyhome)
app.stage.addChild(notificationhomebutton);

const notificationhometext = new PIXI.Text(
    'Notifications', {
        fontFamily: 'Rubik',
        fontSize: 30,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
notificationhometext.position.set(482, 520);
app.stage.addChild(notificationhometext);

const mediahomebutton = PIXI.Sprite.from('../assets/mediahome.png');
mediahomebutton.anchor.set(0);
mediahomebutton.x = 695;
mediahomebutton.y = 130;
mediahomebutton.height = 200;
mediahomebutton.width = 200;
mediahomebutton.interactive = true;
mediahomebutton.cursor = "pointer";
mediahomebutton.on("pointerdown", mediahome)
app.stage.addChild(mediahomebutton);

const mediahometext = new PIXI.Text(
    'Médias', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
mediahometext.position.set(700, 285);
app.stage.addChild(mediahometext);

const settingshomebutton = PIXI.Sprite.from('../assets/settingshome.png');
settingshomebutton.anchor.set(0);
settingshomebutton.x = 695;
settingshomebutton.y = 360;
settingshomebutton.height = 200;
settingshomebutton.width = 200;
settingshomebutton.interactive = true;
settingshomebutton.cursor = "pointer";
settingshomebutton.on("pointerdown", settingshome)
app.stage.addChild(settingshomebutton);

const settingshometext = new PIXI.Text(
    'Paramètres', {
        fontFamily: 'Rubik',
        fontSize: 30,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
settingshometext.position.set(705, 525);
app.stage.addChild(settingshometext);

function gamehome() {
    location.href="game/index.html"
}

function apphome() {
    location.href="apps/index.html"
}

function timelinehome() {
    location.href="timeline/index.html"
}

function notifyhome() {
    location.href="notify/index.html"
}

function mediahome() {
    location.href="media/index.html"
}

function settingshome() {
    location.href="settings/index.html"
}

function back() {
    location.href="../index.html"
}