function setEnemy(){
  switch(knockDownEnemy){
    case 0:
      enemy = new Enemy("野盗", 70, 3,2);
      enemyDeckCard=["type2","type2","type1","type1","type1","type0"];
      addMessage(enemy.name + " が現れた");
      break;
    case 1:
      enemy = new Enemy("親玉", 120, 5,4);
      enemyDeckCard=["type1","type1","type1","type1","type1","type1","type2","type2","type2","type3","type0","type5"];
      addMessage(enemy.name + " が仇討ちに現れた！");
      break;
  }
  enemyBehaviorNumber(enemy.behaviorList)
  setDisplayEnemy();
}