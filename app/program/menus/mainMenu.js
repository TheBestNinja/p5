class MainMenu extends Container {
  constructor(owner) {
    super(owner);
  }

  init() {

    this.color = Config.menuBackground;
    this.x = 50;
    this.y = 50;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = Config.menuBorders;
    this.rounding = 10;
    this.dropShadow = true;

    this.lblHeader = new Label(this);
    this.lblHeader.textColor = Config.menuText;
    this.lblHeader.y = 20;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "p5.js - Arena RPG Template";
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.btnCreateCharacter = new Button(this);
    this.btnCreateCharacter.textColor = Config.buttonText;
    this.btnCreateCharacter.color = Config.buttonBackground;
    this.btnCreateCharacter.y = 100;
    this.btnCreateCharacter.x = 100;
    this.btnCreateCharacter.width = 200;
    this.btnCreateCharacter.height = 50;
    this.btnCreateCharacter.text = "Create Character";
    this.btnCreateCharacter.rounding = 10;
    this.btnCreateCharacter.borderColor = Config.buttonBorders;
    this.btnCreateCharacter.borderWidth = 1;
    this.btnCreateCharacter.dropShadow = true;

    this.btnAbout = new Button(this);
    this.btnAbout.textColor = Config.buttonText;
    this.btnAbout.color = Config.buttonBackground;
    this.btnAbout.y = 175;
    this.btnAbout.x = 100;
    this.btnAbout.width = 200;
    this.btnAbout.height = 50;
    this.btnAbout.text = "About";
    this.btnAbout.rounding = 10;
    this.btnAbout.borderColor = Config.buttonBorders;
    this.btnAbout.borderWidth = 1;
    this.btnAbout.dropShadow = true;

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.btnCreateCharacter);
    this.drawables.push(this.btnAbout);

    this.clickables.push(this.btnCreateCharacter);
    this.clickables.push(this.btnAbout);

    this.characterTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y < 510) {
          that.container.owner.characterBuilder.y += 20;
          that.container.owner.mainMenu.y += 20;
          that.container.owner.fightMenu.y += 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };

    this.btnCreateCharacter.subscribe(this.characterTransition);

    this.aboutTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y > -400) {
          that.container.owner.characterBuilder.y -= 20;
          that.container.owner.mainMenu.y -= 20;
          that.container.owner.fightMenu.y -= 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };


    this.btnAbout.subscribe(this.aboutTransition);
  }
}