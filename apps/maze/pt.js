// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="MSG" style="display:none"><span id="fullTitle">Blockly Quebra-cabeça</span><span id="moveForward">Mover para a frente</span><span id="turnLeft">gire para a esquerda</span><span id="turnRight">gire para a direita</span><span id="doCode">faça</span><span id="elseCode">senão</span><span id="pathAhead">se existe um caminho em frente</span><span id="pathLeft">se existe um caminho para a esquerda</span><span id="pathRight">se existe um caminho para a direita</span><span id="repeatUntil">repita até o</span><span id="moveForwardTooltip">Move o Pegman um quadro para frente.</span><span id="turnTooltip">Gire o Pegman 90 graus para esquerda ou para a \\ndireita. </span><span id="ifTooltip">Se existe um caminho na direção especificada, \\nentao executa algumas ações. </span><span id="ifelseTooltip">Se não existe um caminho na direção \\nespecificada, então execute o primeiro \\nbloco de ações. Senão, execute o \\nsegundo bloco de ações. </span><span id="whileTooltip">Repita as ações seguintes até que o ponto final \\nseja alcançado. </span><span id="capacity0">Você tem mais 0 blocos.</span><span id="capacity1">Você tem mais 1 blocos.</span><span id="capacity2">Você tem mais %1 blocos.</span><span id="nextLevel">Parabéns! Você está apto para o nível %1?</span><span id="finalLevel">Parabéns! Você resolveu o nível final.</span><span id="oneTopBlock">Neste nível, você precisa empilhar todos os blocos nos espaços em branco.</span><span id="fullTitle">Blockly Quebra-cabeça</span></div><table width="100%" height="100%"><tr><td width="410" valign="top"><h1><a href="http://blockly.googlecode.com/">Blockly</a> &gt; <a href="../index.html">Apps</a> &gt; Quebra-cabeça</h1><div>Nível &nbsp;';
  for (var i112 = 1; i112 < 11; i112++) {
    output += (i112 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i112) + '</span>' : '<a class="tab" href="?level=' + soy.$$escapeHtml(i112) + '">' + soy.$$escapeHtml(i112) + '</a>';
  }
  output += '</div><div style="position: relative"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Um programa é uma sequência de declarações. Empilhe alguns blocos \'Mover para a frente\' para ajudar-me a chegar ao destino.';
      break;
    case 2:
      output += 'Qual é a sequência de passos para seguir este caminho?';
      break;
    case 3:
      output += 'Os computadores têm uma memoria limitada. Chegue ao destino usando apenas dois blocos. Utilize o comando \'repita\' para executar um bloco várias vezes.';
      break;
    case 4:
      output += 'Chegue ao destino utilizando apenas cinco blocos.';
      break;
    case 5:
      output += 'Pegman will have to turn left when he cannot go straight.';
      break;
    case 6:
      output += 'A condição \'se\' executa algo apenas se a condição for verdadeira. Tente girar à esquerda se existe um caminho à esquerda';
      break;
    case 7:
      output += 'Este quebra-cabeças parece ser mais complicado que o anterior, mas nao é.';
      break;
    case 8:
      output += 'Você pode utilizar mais de um comando \'se\'.';
      break;
    case 9:
      output += 'O comando \'Se-senão\' faz uma coisa ou outra.';
      break;
    case 10:
      output += 'Você consegue resolver este quebra cabeças complexo. Tente seguir o muro do lado esquerdo. Para programadores avançados apenas!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="100%"><tr><td style="width: 190px; text-align: center"><button title="Veja o código JavaScript gerado." onclick="Blockly.Apps.showCode();"><img src=\'../../media/1x1.gif\' class="code"></button><button id="linkButton" title="Salva conexão com o blockly." onclick="BlocklyStorage.link();"><img src=\'../../media/1x1.gif\' class="link"></button><button id="randomizeButton" title="Gera ponto final e inicial aleatórios. onclick="Maze.randomizeMarkers();" style="display: none"><img src=\'../../media/1x1.gif\' class="random"></button></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();">Executar programa</button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none">Reiniciar</button></td></tr></table></td><td valign="top"><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../generators/javascript.js"><\/script><script type="text/javascript" src="../common.js"><\/script><script type="text/javascript">Blockly.Apps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div></td></tr></table>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};