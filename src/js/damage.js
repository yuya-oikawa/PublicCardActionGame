// 基本ダメージ計算式
function typeDamage(target, effect) {
  const msg = " のダメージを与えた！"
  let damage = Math.floor(effect * randomNumber7To13()) - target.deffence
  if (target.stateDeffence){
    damage = Math.floor(damage/2)
  }
  damage = damageStopper(damage)
  DamageReflection(target, damage, damage + msg)
}

// 基本回復計算式
function typeRecovery(target, effect) {
  const msg=" 回復した!"
  let damage = effect * -1
  damage = damageStopper(damage, true)
  DamageReflection(target, damage, effect + msg)
}

// 特殊ステータス
function typeState(target, name) {
  switch(name){
    case "防御":
      target.stateDeffence = true;
      break;
    case "マナチャージ":
      target.maxCost++
      addMessage(target.name + " の最大Costが1増加した")
      break;
  }
}

// 基本魔法ダメージ計算式
function typeMagic(target, effect) {
  const msg=" のダメージを与えた！"
  let damage = Math.floor(effect * randomNumber7To13())
  damage = damageStopper(damage)
  DamageReflection(target, damage, damage + msg)
}


function damageStopper(damage, recoveryFl = false) {
  // 回復行動時
  if (recoveryFl){
    if(damage >= 0){
      damage = 0
    }
  // 攻撃行動時
  }else{
    if(damage <= 0){
      damage = 0
    }
  }
  return damage
}

// ダメージ系反映
function DamageReflection(target, damage, msg){
  let targetHp = target.HP - damage
  let targetMaxHp = target.maxHP
  let defeatFl = false

  if (targetHp <= 0){
    target.HP = 0
    defeatFl = true
  }else if(targetHp > targetMaxHp){
    target.HP = targetMaxHp
  }else{
    target.HP = targetHp
  }
  addMessage(target.name + " に " + msg)
  if (defeatFl){
    addMessage(target.name + " は倒れた ")
    if (PlayerTime){
      playerVictoryNext(true);
    }else{
      playerVictoryNext(false);
    }
  }
}

