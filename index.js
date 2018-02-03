function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for(var i = 0; i<katzDeliLine.length; i++) {
    if(katzDeliLine[i] === name) {
    return 'Welcome, ' + name + '. You are number ' + (i+1) + ' in line.';
    }
  }
}
function nowServing(katzDeliLine) {
  var serving = katzDeliLine[0];
  var result = '';
  if(katzDeliLine.length === 0) {
    result = 'There is nobody waiting to be served!';
  } else {
    result = 'Currently serving ' + serving + '.';
    katzDeliLine.shift();
  }
  return result;
}
