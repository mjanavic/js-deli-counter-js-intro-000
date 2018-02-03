function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for(var i = 0; i<katzDeliLine; i++) {
    if(katzDeliLine[i] === name) {
    return 'Welcome, ' + name + '. You are number ' + (i+1) + ' in line.';
    }
  }
}
