let player,
    enemy;

// キャラクター選択
const header = document.getElementById("header");
const main = document.getElementById("main");
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("Warrior").addEventListener("click",function(){
    // キャラクター情報を設定
    player = new Player("ファイター", 100, 10, 2, 4, 3, 12);
    playerDeckCard = warriorCard;
    initSetDisplay();
  })
  document.getElementById("Wizard").addEventListener("click",function(){
    // キャラクター情報を設定
    player = new Player("ウィザード", 60, 5, 2, 3, 4, 9);
    playerDeckCard = wizardCard;
    initSetDisplay();
  })
})

function initSetDisplay(){
      // 画面の表示状態を切替
      header.classList.add("hidden");
      main.classList.add("visible");
      setDisplayPlayer()
      addCard()
  
      // 状況整理
      cardClickRan();
      setEnemy();  
}

function setDisplayPlayer(){
  setDisplayPlayerParameter();
  setDisplayPlayerAction();
}

function setDisplayPlayerParameter(){
  document.getElementById('playerName').textContent = "Name:" + player['name'];
  document.getElementById('playerHp').textContent = "HP:" + player['HP'];
  document.getElementById('playerMaxHp').textContent = "MaxHP:" + player['maxHP'];
}

function setDisplayPlayerAction(){
  document.getElementById('Cost').textContent = "Cost:" + cost + " / " + player['maxCost'];
  document.getElementById('behaviorLimit').textContent = "行動数:" + behaviorLimit + " / " + player['behaviorLimit'];
}

function setDisplayEnemy(){
  document.getElementById('enemyName').textContent = "Name:" + enemy['name'];
  document.getElementById('enemyHp').textContent = "HP:" + enemy['HP'];
  document.getElementById('enemyMaxHp').textContent = "MaxHP:" + enemy['maxHP'];
}
