let qaBlocks = document.querySelectorAll(".qa-block");

qaBlocks.forEach(qaBlock => {
  let questionBlock = qaBlock.children[0];
  let question = qaBlock.children[0].children[0];
  let arrow = qaBlock.children[0].children[1].children[0];
  let answer = qaBlock.children[1];

  questionBlock.addEventListener('click', () => {
    if (answer.style.display == 'block') {
      question.style.fontWeight = 400;
      answer.style.display = 'none';
      arrow.style.transform  = 'rotate(0deg)';
    }
    else {
      question.style.fontWeight = 700;
      answer.style.display = 'block';
      arrow.style.transform  = 'rotate(180deg)';
    }   
  });
});
