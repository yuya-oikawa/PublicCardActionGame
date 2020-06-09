
// ターン終了時
document.getElementById("end").addEventListener("click",function(){
  if (!playerDefeatFl){
    childElementAlldelete("behavior");
    addCard()
    cardClickRan();
    PlayerTimeEnd();
  }
})

// 再構成選択時
document.getElementById("Reconstruction").addEventListener("click",function(){
  if (!playerDefeatFl){
    switch (behaviorLimit){
      case 0:
        childElementAlldelete("behavior");
        if (player["name"]="ファイター"){
          playerDeckCard = warriorCard
        }else if(player["name"]="ウィザード"){
          playerDeckCard = wizardCard
        }
        addCard()
        cardClickRan();
        addMessage("ターンを消費し、山札を再構築します。")
        PlayerTimeEnd();
        break;
      default:
        addMessage("行動後に山札の再構築は行えません。")
    }
  }
})

function PlayerTimeEnd(){
  PlayerTime = false
  cost = 0
  behaviorLimit = 0
  addMessage("プレイヤーのターンが終了します。")
  setDisplayPlayerAction()
  // 敵のターンを開始する。
  enemyBehavior()
  // 敵の防御フラグの解除
  enemy.stateDeffence = false;
}

// 行動実行
function behaviorExecution(card) {
  let user
  let target
  if(PlayerTime){
    // 対象情報の代入
    user = player
    target = enemy
    // Actionの更新
    cost += card.cost;
    behaviorLimit++;

  }else{
    user = enemy
    target = player
  }
  addMessage(user.name + " は " + card.name + " を行った ")

  switch (card.exception){
    case "attack":
      typeDamage(target, card["attackValue"])
      break;
    case "recovery":
      typeRecovery(user, card["attackValue"])
      break;
    case "state":
      typeState(user, card["name"])
      break;
    case "magic":
      typeMagic(target, card["attackValue"])
      break;
  }

  // 表記ステータス更新
  setDisplayPlayer();
  setDisplayEnemy()
}

// 行動チェック
function behaviorCheck(card) {
  let Check = true;

  if(player['maxCost'] < (cost + card.cost)){
    addMessage("Costオーバーです。")
    Check=false;
  }else if (behaviorLimit === player['behaviorLimit']){
    addMessage("行動回数が上限に達しています。")
    Check=false;
  }
  return Check;
}

// 敵の行動
function enemyBehavior(){
  // 山札から行動数分だけ取り出してきて行動を行う。
  let currentCardList = getRandomForArray(enemyDeckCard, enemy["behaviorList"])

  currentCardList.forEach(function(cardClassName) {
    behaviorExecution(new cardClass[cardClassName])
  });
  if (!playerDefeatFl){
    PlayerTime = true;
    addMessage("敵のターンが終了します。")
    addMessage("プレイヤーのターンが開始されます。")
  }
  // プレイヤーの防御フラグの解除
  player.stateDeffence = false;

}


function playerVictoryNext(victoryFl){
  if (victoryFl){
    childElementAlldelete("behavior");
    if (player["name"]==="ファイター"){
      playerDeckCard = warriorCard
    }else if(player["name"]==="ウィザード"){
      playerDeckCard = wizardCard
    }
    addCard()
    cardClickRan();

    // 回復処理
    player['HP']=player['maxHP'];
    addMessage("あなたは勝利しました！")
    addMessage("勝利したあなたは次なる戦いに備え、HPの回復と山札を再構築を行います。")
    addMessage("・・・")
    addMessage("・・")
    addMessage("・")
    knockDownEnemy++
    cost = 0
    setDisplayPlayer();
    // 新しい敵のセッティング
    behaviorLimit = 0
    setEnemy();
    if (enemy.HP === 0){
      addMessage("しかし敵は現れない！")
      addMessage("あなたは全ての敵を撃ち倒したのです！")
      addMessage("ーーENDーー")
      PlayerTime = false
      playerDefeatFl = true;
    }
  }else{
    playerDefeatFl = true;
    addMessage("あなたの敗北です。")
  }

}