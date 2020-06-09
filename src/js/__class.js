class Player {
  // 名前 HP 防御力 行動限界数 行動枚数リスト Cost上限　山札数
  constructor (name, HP, deffence, behaviorLimit, behaviorList, cost, maxDeckCardNumber) {
    this.name = name;
    this.HP = HP;
    this.maxHP = HP;
    this.deffence = deffence;
    this.behaviorLimit = behaviorLimit;
    this.behaviorList = behaviorList;
    this.maxCost = cost;
    this.maxDeckCardNumber = maxDeckCardNumber;
    this.stateDeffence = false
  }
}

class Enemy {
  constructor (name, HP, deffence,behaviorList) {
    this.name = name;
    this.HP = HP;
    this.maxHP = HP;
    this.deffence = deffence;
    this.behaviorList = behaviorList;
    this.stateDeffence = false
  }
}

// 手札カード
class Card {
  // setid name cardTypeId cost　説明文 使用状態
  constructor (name, cost, info, attackValue) {
    this.name = name;
    this.cost = cost;
    this.info = info;
    this.attackValue = attackValue;
  }
}

// カード詳細
const cardClass = {
  type0: class type0 extends Card {
    constructor(name, cost, info, attackValue) {
      super(name = "防御", cost = 0, info = "次の自ターンまで、物理ダメージを半減する", attackValue);

      this.exception = "state";
    }
  },

  type1: class type1 extends Card {
    constructor(name, cost, info, attackValue) {
      super(name = "アタック", cost = 1, info = "威力15の物理攻撃を行う", attackValue = 15);

      this.exception = "attack";
    }
  },

  type2: class type2 extends Card {
    constructor(name, cost, info, attackValue) {
      super(name = "スマッシュ", cost = 2, info = "威力20の物理攻撃を行う", attackValue = 25);

      this.exception = "attack";
    }
  },

  type3: class type3 extends Card {
    constructor(name, cost, info, attackValue) {
      super(name = "ヒール", cost = 3, info = "HPを50回復する", attackValue = 50);

      this.exception = "recovery";
    }
  },

  type4: class type4 extends Card {
    constructor(name, cost, info, attackValue) {
      super(name = "マナチャージ", cost = 3, info = "Cost最大値を1増やす", attackValue);

      this.exception = "state";

    }
  },

  type5: class type5 extends Card {
    constructor(name, cost, info, attackValue) {
      super(name = "ファイアマジック", cost = 4, info = "威力40の魔法攻撃を行う", attackValue=40);

      this.exception = "magic";
    }
  },

  type6: class type6 extends Card {
    constructor(name, cost, info, attackValue) {
      super(name = "ファイアストーム", cost = 5, info = "威力70の魔法攻撃を行う", attackValue=70);

      this.exception = "magic";
    }
  },

}
