//最大値・最小値を引数に持つ関数
function getRandom( min, max ) {
  let random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  return random;
}

// log出力
function addMessage(msg) {
  const p = document.createElement('p');
  const messagelog = document.getElementById('messagelog');
  p.textContent = msg;
  console.log(p);
  messagelog.insertBefore(p, messagelog.firstChild);
}

function randomNumber7To13(){
  return (1 - getRandom(-3,3)/10)
}

// 配列から任意の個数取り出す
function getRandomForArray(array, num) {
  let number = num
  if (array.length < number){
    number=array.length
  }

  const result = [];
  for (let i = array.length - 1; i >= 0; i--){
    // 0~iのランダムな数値を取得
    const rand = Math.floor( Math.random() * ( i + 1 ) );
    // 配列の数値を入れ替える
    [array[i], array[rand]] = [array[rand], array[i]]
  }

  for (let i = 0; i < number; i++) {
    result.push(array[i]);
  }
  return result;
}

// 子要素全削除
function childElementAlldelete(element){
  let parent = document.getElementById(element);
  while(parent.lastChild) {

    parent.removeChild(parent.lastChild);
  }
}
