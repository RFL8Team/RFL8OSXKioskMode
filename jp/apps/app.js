
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
        'アプリ', {
            fontFamily: 'Rubik',
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#7856ff',
            align: 'middle',
        }
    );
    welcome.position.set(350, 45);
    app.stage.addChild(welcome);
}

const backimage = PIXI.Sprite.from('../../assets/button.png');
backimage.anchor.set(0);
backimage.x = 45;
backimage.y = 30;
backimage.interactive = true;
backimage.cursor = "pointer";
backimage.on("pointerdown", backtohome)
app.stage.addChild(backimage);

const backtext = new PIXI.Text(
    '背面', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
backtext.position.set(150, 45);
app.stage.addChild(backtext);

const graphics = new PIXI.Graphics();
graphics.beginFill(0x7856FF);
graphics.drawRect(45, 150, 1200, 400);
graphics.endFill();
app.stage.addChild(graphics);

const apptext = new PIXI.Text(
    'アプリは、ここで好きなアプリを実行することができます。', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'normal',
        fill: 'white',
        align: 'middle',
    }
);
apptext.position.set(55, 160);
app.stage.addChild(apptext);

function backtohome() {
    location.href="../index.html"
};