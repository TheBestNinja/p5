class CharacterAttributes extends Container {
  constructor(owner) {
    super(owner);
  }

  init() {
    this.color = Config.menuBackground;
    this.x = 50;
    this.y = 50;
    this.width = 275;
    this.height = 175;
    this.borderWidth = 0;
    this.rounding = 0;
    this.visible = true;
    this.dropShadow = false;

    this.lblPoints = new Label(this);
    this.lblPoints.textColor = Config.menuText;
    this.lblPoints.y = 5;
    this.lblPoints.x = 0;
    this.lblPoints.width = 275;
    this.lblPoints.height = 50;
    this.lblPoints.text = `Distribute ${ArenaRPG.player.availablePoints} points`;
    this.lblPoints.alignment = 'center';
    this.lblPoints.textSize = 21;

    this.lblStr = new Label(this);
    this.lblStr.textColor = Config.menuText;
    this.lblStr.y = 55;
    this.lblStr.x = 25;
    this.lblStr.width = 100;
    this.lblStr.height = 30;
    this.lblStr.text = `STR: ${ArenaRPG.player.STR}`;
    this.lblStr.textSize = 21;
    this.lblStr.alignment = 'right';

    this.plusClick = function () {
      ArenaRPG.player.addPoint(this.attribute);
      this.container.updateText();
    };

    this.minusClick = function () {
      ArenaRPG.player.subtractPoint(this.attribute);
      this.container.updateText();
    };

    this.btnStrPlus = new Button(this);
    this.btnStrPlus.textColor = Config.buttonText;
    this.btnStrPlus.color = Config.attributePlusButtonBackground;
    this.btnStrPlus.y = this.lblStr.y;
    this.btnStrPlus.x = 155;
    this.btnStrPlus.width = 25;
    this.btnStrPlus.height = 25;
    this.btnStrPlus.text = "+";
    this.btnStrPlus.rounding = 0;
    this.btnStrPlus.borderColor = Config.attributePlusButtonBorder;
    this.btnStrPlus.borderWidth = 1;
    this.btnStrPlus.subscribe(this.plusClick);
    this.btnStrPlus.attribute = 'STR';

    this.btnStrMinus = new Button(this);
    this.btnStrMinus.textColor = Config.buttonText;
    this.btnStrMinus.color = Config.attributeMinusButtonBackground;
    this.btnStrMinus.y = this.lblStr.y;
    this.btnStrMinus.x = 185;
    this.btnStrMinus.width = 25;
    this.btnStrMinus.height = 25;
    this.btnStrMinus.text = "-";
    this.btnStrMinus.rounding = 0;
    this.btnStrMinus.borderColor = Config.attributeMinusButtonBorder;
    this.btnStrMinus.borderWidth = 1;
    this.btnStrMinus.subscribe(this.minusClick);
    this.btnStrMinus.attribute = 'STR';

    this.lblDex = new Label(this);
    this.lblDex.textColor = Config.menuText;
    this.lblDex.y = 85;
    this.lblDex.x = 25;
    this.lblDex.width = 100;
    this.lblDex.height = 30;
    this.lblDex.text = `DEX: ${ArenaRPG.player.DEX}`;
    this.lblDex.textSize = 21;
    this.lblDex.alignment = 'right';

    this.btnDexPlus = new Button(this);
    this.btnDexPlus.textColor = Config.buttonText;
    this.btnDexPlus.color = Config.attributePlusButtonBackground;
    this.btnDexPlus.y = this.lblDex.y;
    this.btnDexPlus.x = 155;
    this.btnDexPlus.width = 25;
    this.btnDexPlus.height = 25;
    this.btnDexPlus.text = "+";
    this.btnDexPlus.rounding = 0;
    this.btnDexPlus.borderColor = Config.attributePlusButtonBorder;
    this.btnDexPlus.borderWidth = 1;
    this.btnDexPlus.subscribe(this.plusClick);
    this.btnDexPlus.attribute = 'DEX';

    this.btnDexMinus = new Button(this);
    this.btnDexMinus.textColor = Config.buttonText;
    this.btnDexMinus.color = Config.attributeMinusButtonBackground;
    this.btnDexMinus.y = this.lblDex.y;
    this.btnDexMinus.x = 185;
    this.btnDexMinus.width = 25;
    this.btnDexMinus.height = 25;
    this.btnDexMinus.text = "-";
    this.btnDexMinus.rounding = 0;
    this.btnDexMinus.borderColor = Config.attributeMinusButtonBorder;
    this.btnDexMinus.borderWidth = 1;
    this.btnDexMinus.subscribe(this.minusClick);
    this.btnDexMinus.attribute = 'DEX';

    this.lblInt = new Label(this);
    this.lblInt.textColor = Config.menuText;
    this.lblInt.y = 115;
    this.lblInt.x = 25;
    this.lblInt.width = 100;
    this.lblInt.height = 30;
    this.lblInt.text = `INT: ${ArenaRPG.player.INT}`;
    this.lblInt.textSize = 21;
    this.lblInt.alignment = 'right';

    this.btnIntPlus = new Button(this);
    this.btnIntPlus.textColor = Config.buttonText;
    this.btnIntPlus.color = Config.attributePlusButtonBackground;
    this.btnIntPlus.y = this.lblInt.y;
    this.btnIntPlus.x = 155;
    this.btnIntPlus.width = 25;
    this.btnIntPlus.height = 25;
    this.btnIntPlus.text = "+";
    this.btnIntPlus.rounding = 0;
    this.btnIntPlus.borderColor = Config.attributePlusButtonBorder;
    this.btnIntPlus.borderWidth = 1;
    this.btnIntPlus.subscribe(this.plusClick);
    this.btnIntPlus.attribute = 'INT';

    this.btnIntMinus = new Button(this);
    this.btnIntMinus.textColor = Config.buttonText;
    this.btnIntMinus.color = Config.attributeMinusButtonBackground;
    this.btnIntMinus.y = this.lblInt.y;
    this.btnIntMinus.x = 185;
    this.btnIntMinus.width = 25;
    this.btnIntMinus.height = 25;
    this.btnIntMinus.text = "-";
    this.btnIntMinus.rounding = 0;
    this.btnIntMinus.borderColor = Config.attributeMinusButtonBorder;
    this.btnIntMinus.borderWidth = 1;
    this.btnIntMinus.subscribe(this.minusClick);
    this.btnIntMinus.attribute = 'INT';

    this.lblHealth = new Label(this);
    this.lblHealth.textColor = Config.menuText;
    this.lblHealth.y = 145;
    this.lblHealth.x = 25;
    this.lblHealth.width = 100;
    this.lblHealth.height = 30;
    this.lblHealth.text = `HP: ${ArenaRPG.player.HP}`;
    this.lblHealth.textSize = 21;
    this.lblHealth.alignment = 'right';

    this.btnHealthPlus = new Button(this);
    this.btnHealthPlus.textColor = Config.buttonText;
    this.btnHealthPlus.color = Config.attributePlusButtonBackground;
    this.btnHealthPlus.y = this.lblHealth.y;
    this.btnHealthPlus.x = 155;
    this.btnHealthPlus.width = 25;
    this.btnHealthPlus.height = 25;
    this.btnHealthPlus.text = "+";
    this.btnHealthPlus.rounding = 0;
    this.btnHealthPlus.borderColor = Config.attributePlusButtonBorder;
    this.btnHealthPlus.borderWidth = 1;
    this.btnHealthPlus.subscribe(this.plusClick);
    this.btnHealthPlus.attribute = 'HP';

    this.btnHealthMinus = new Button(this);
    this.btnHealthMinus.textColor = Config.buttonText;
    this.btnHealthMinus.color = Config.attributeMinusButtonBackground;
    this.btnHealthMinus.y = this.lblHealth.y;
    this.btnHealthMinus.x = 185;
    this.btnHealthMinus.width = 25;
    this.btnHealthMinus.height = 25;
    this.btnHealthMinus.text = "-";
    this.btnHealthMinus.rounding = 0;
    this.btnHealthMinus.borderColor = Config.attributeMinusButtonBorder;
    this.btnHealthMinus.borderWidth = 1;
    this.btnHealthMinus.subscribe(this.minusClick);
    this.btnHealthMinus.attribute = 'HP';

    this.drawables.push(this.lblPoints);

    this.drawables.push(this.lblStr);
    this.drawables.push(this.btnStrPlus);
    this.drawables.push(this.btnStrMinus);

    this.drawables.push(this.lblDex);
    this.drawables.push(this.btnDexPlus);
    this.drawables.push(this.btnDexMinus);

    this.drawables.push(this.lblInt);
    this.drawables.push(this.btnIntPlus);
    this.drawables.push(this.btnIntMinus);

    this.drawables.push(this.lblHealth);
    this.drawables.push(this.btnHealthPlus);
    this.drawables.push(this.btnHealthMinus);

    this.clickables.push(this.btnStrPlus);
    this.clickables.push(this.btnStrMinus);

    this.clickables.push(this.btnDexPlus);
    this.clickables.push(this.btnDexMinus);

    this.clickables.push(this.btnIntPlus);
    this.clickables.push(this.btnIntMinus);

    this.clickables.push(this.btnHealthPlus);
    this.clickables.push(this.btnHealthMinus);

  }
  updateText() {
    this.lblPoints.text = `Distribute ${ArenaRPG.player.availablePoints} points`;
    this.lblStr.text = `STR: ${ArenaRPG.player.STR}`;
    this.lblDex.text = `DEX: ${ArenaRPG.player.DEX}`;
    this.lblInt.text = `INT: ${ArenaRPG.player.INT}`;
    this.lblHealth.text = `HP: ${ArenaRPG.player.HP}`;
  }
}