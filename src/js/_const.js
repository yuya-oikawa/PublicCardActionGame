let cardInstanceList = null, //Card種類の保存庫
    PlayerTime = true, // 現在誰のターンか
    cost = 0, // 現在コスト
    behaviorLimit = 0, // 現在の行動数
    knockDownEnemy = 0, // 倒した敵の数
    playerDefeatFl = false,// プレイヤーの敗北フラグ
    playerDeckCard=[],
    enemyDeckCard=[]

const warriorCard = ['type0', 'type0', 'type1', 'type1', 'type1', 'type1', 'type1', 'type1', 'type2', 'type2', 'type2', 'type3'],
      wizardCard = ['type0', 'type0', 'type1', 'type3', 'type6', 'type5', 'type5', 'type4', 'type4'];
