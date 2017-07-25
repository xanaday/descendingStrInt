function minusTen(num) {
  var arr = '';
  for (var i = num; i > 0; i--) {
arr += '*';
  }

  var newArr = arr.split('');
  var interval = setInterval(function(){
     newArr.pop();
     console.log(newArr.join(' '));
     num--;
     if(!num)
        clearInterval(interval);
  }, 1000)
}

minusTen(10);
