
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
    const languageselect = new PIXI.Text(
        'Please select a language', {
            fontFamily: 'Rubik',
            fontSize: 40,
            fontWeight: 'bold',
            fill: 'white',
            align: 'middle',
        }
    );
    languageselect.position.set(app.screen.width / 3, 25);
    app.stage.addChild(languageselect);
}

const backbutton = PIXI.Sprite.from('assets/button_back.png');
backbutton.anchor.set(0.5);
backbutton.x = 190;
backbutton.y = 50;
backbutton.interactive = true;
backbutton.cursor = 'pointer';
backbutton.on('pointerdown', BackToWebsite);
app.stage.addChild(backbutton);

const buttonen = PIXI.Sprite.from('assets/button.png');
buttonen.anchor.set(0.5);
buttonen.x = 350;
buttonen.y = 250;
buttonen.interactive = true;
buttonen.cursor = 'pointer';
buttonen.on('pointerdown', English);
app.stage.addChild(buttonen);

const buttones = PIXI.Sprite.from('assets/button.png');
buttones.anchor.set(0.5);
buttones.x = app.screen.width / 2;
buttones.y = 250;
buttones.interactive = true;
buttones.cursor = 'pointer';
buttones.on('pointerdown', Spanish);
app.stage.addChild(buttones);

const buttonpt = PIXI.Sprite.from('assets/button.png');
buttonpt.anchor.set(0.5);
buttonpt.x = 960;
buttonpt.y = 250;
buttonpt.interactive = true;
buttonpt.cursor = 'pointer';
buttonpt.on('pointerdown', Portuguese);
app.stage.addChild(buttonpt);

const buttonfr = PIXI.Sprite.from('assets/button.png');
buttonfr.anchor.set(0.5);
buttonfr.x = 500;
buttonfr.y = 330;
buttonfr.interactive = true;
buttonfr.cursor = 'pointer';
buttonfr.on('pointerdown', French);
app.stage.addChild(buttonfr);

const buttonjp = PIXI.Sprite.from('assets/button.png');
buttonjp.anchor.set(0.5);
buttonjp.x = 805;
buttonjp.y = 330;
buttonjp.interactive = true;
buttonjp.cursor = 'pointer';
buttonjp.on('pointerdown', Japanese);
app.stage.addChild(buttonjp);

const texten = new PIXI.Text(
    'English', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'bold',
        fill: 'white',
        align: 'middle',
    }
);
texten.position.set(280, 225);
app.stage.addChild(texten);

const textes = new PIXI.Text(
    'Español', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'bold',
        fill: 'white',
        align: 'middle',
    }
);
textes.position.set(580, 225);
app.stage.addChild(textes);

const textpt = new PIXI.Text(
    'Português', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'bold',
        fill: 'white',
        align: 'middle',
    }
);
textpt.position.set(860, 225);
app.stage.addChild(textpt);

const textfr = new PIXI.Text(
    'Français', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'bold',
        fill: 'white',
        align: 'middle',
    }
);
textfr.position.set(420, 305);
app.stage.addChild(textfr);

const textjp = new PIXI.Text(
    '日本語', {
        fontFamily: 'Rubik',
        fontSize: 40,
        fontWeight: 'bold',
        fill: 'white',
        align: 'middle',
    }
);
textjp.position.set(745, 305);
app.stage.addChild(textjp);

function BackToWebsite() {
    location.href="https://rfl8team.github.io"
}

function English() {
    location.href="en/index.html"
}

function Spanish() {
    location.href="es/index.html"
}

function Portuguese() {
    location.href="pt/index.html"
}

function French() {
    location.href="fr/index.html"
}

function Japanese() {
    location.href="jp/index.html"
}

//