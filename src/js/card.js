// querySelectorAllはCSSのセレクターで要素を取得することができる。配列で取得
function cardClickRan(){
  const cardElements = document.querySelectorAll("#behavior ul");
  cardElements.forEach(function(card) {
    card.addEventListener("click", function() {
      let useCardData = null;
      cardInstanceList.forEach(cardData => {
        if (cardData["name"] === this.querySelector(".name").textContent) {
          useCardData = cardData;
          return true;
        }
      });
      if (PlayerTime && behaviorCheck(useCardData)) {
        behaviorExecution(useCardData)
        this.classList.add("hidden");
        setTimeout( () => {
          this.remove();
        }, 500);
      }
    });
  });
}

function addCard() {
  const currentCardList = getRandomForArray(playerDeckCard, player["behaviorList"]);
  // 山札カードを更新
  deckCardRemaining(currentCardList);

  // 重複削除
  const notDuplicationCardList = currentCardList.filter(function (x, i, self) {
          return self.indexOf(x) === i;
        }),
        cardInstance = [];
  // Cardを種類ごとに作成
  notDuplicationCardList.forEach(function(cardClassName) {
    cardInstance.push(new cardClass[cardClassName]);
  });
  cardInstanceList = cardInstance

  for (let i = 0; i < currentCardList.length; i++) {
    const ulTag = document.createElement("ul");
    const classNameList = ["name", "cost", "info"];

    for (let j = 0; j < classNameList.length; j++) {
      const liTag = document.createElement("li");
      liTag.classList.add(classNameList[j]);

      let useCardInstance = null;
      cardInstance.forEach(function(card) {
        if (card.constructor.name === currentCardList[i]) {
          useCardInstance = card;
          return true;
        }
      });
      liTag.textContent = useCardInstance[classNameList[j]];
      ulTag.appendChild(liTag);
    }

    document.getElementById("behavior").appendChild(ulTag);
  }
}

function enemyBehaviorNumber(behaviorNumber){
  childElementAlldelete("enemyBill");

  for (let i = 0; i < behaviorNumber; i++) {
    const ulTag = document.createElement("ul");
    const liTag = document.createElement("li");
    liTag.textContent = "敵Card";
    ulTag.appendChild(liTag);
    document.getElementById("enemyBill").appendChild(ulTag);

  }
}

// デッキの書き換え
function deckCardRemaining(acquiredList){
  acquiredList.forEach(function(acquired){
    let i = 0;
    const deck = [];
    let first　= true;
    playerDeckCard.forEach(function(card){
      if (acquired === card && first ){
        first = false;
        i += 1
        console.log(i);
      } else {
        deck.push(card);
      }
    })
    playerDeckCard = deck;
  })
  if (playerDeckCard.length === 0){
    addMessage("山札が空になりました")
  }
}