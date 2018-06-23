/**

 Description:
 Background
 My TV remote control has arrow buttons and an OK button.

 I can use these to move a "cursor" on a logical screen keyboard to type words...

 Keyboard
 The screen "keyboard" layout looks like this

 a	b	c	d	e	1	2	3
 f	g	h	i	j	4	5	6
 k	l	m	n	o	7	8	9
 p	q	r	s	t	.	@	0
 u	v	w	x	y	z	_	/
 Aa	SP


 Aa is the SHIFT key. Pressing this key toggles alpha characters between UPPERCASE and lowercase
 SP is the space character
 The other blank keys in the bottom row have no function
 Kata task
 How many button presses on my remote are required to type the given words?

 Notes
 The cursor always starts on the letter a (top left)

 The alpha characters are initially lowercase (as shown above)

 Remember to also press OK to "accept" each letter

 Take a direct route from one letter to the next

 The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)

 Although the blank keys have no function, you may navigate through them if you want to

 Spaces may occur anywhere in the words string.

 Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before)

 Example
 words = Code Wars

 C => a-f-k-p-u-Aa-OK-U-P-K-F-A-B-C-OK = 14
 o => C-H-M-R-W-V-U-Aa-OK-SP-v-q-l-m-n-o-OK = 16
 d => o-j-e-d-OK = 4
 e => d-e-OK = 2
 space => e-d-c-b-g-l-q-v-SP-OK = 9
 W => SP-Aa-OK-SP-V-W-OK = 6
 a => W-V-U-Aa-OK-u-p-k-f-a-OK = 10
 r => a-f-k-p-q-r-OK = 6
 s => r-s-OK = 2
 Answer = 14 + 16 + 4 + 2 + 9 + 6 + 10 + 6 + 2 = 69

 */


function tvRemote(words) {
  let keyboard = {
    'a': [1,1],
    'b': [1,2],
    'c': [1,3],
    'd': [1,4],
    'e': [1,5],
    'f': [2,1],
    'g': [2,2],
    'h': [2,3],
    'i': [2,4],
    'j': [2,5],
    'k': [3,1],
    'l': [3,2],
    'm': [3,3],
    'n': [3,4],
    'o': [3,5],
    'p': [4,1],
    'q': [4,2],
    'r': [4,3],
    's': [4,4],
    't': [4,5],
    'u': [5,1],
    'v': [5,2],
    'w': [5,3],
    'x': [5,4],
    'y': [5,5],
    'z': [5,6],
    '1': [1,6],
    '2': [1,7],
    '3': [1,8],
    '4': [2,6],
    '5': [2,7],
    '6': [2,8],
    '7': [3,6],
    '8': [3,7],
    '9': [3,8],
    '.': [4,6],
    '@': [4,7],
    '0': [4,8],
    '_': [5,7],
    '/': [5,8],
    '^': [6,1],
    ' ': [6,2]
  };
  words = words.split('');
  let curr = 'a', count = 0, shiftToggle = false;
  words.forEach((item, index) => {
    if (item === item.toUpperCase() && item.match(/[a-z]/i) && !shiftToggle) {
      count += calculateMoves(curr, '^', keyboard);
      curr = '^';
      item = item.toLowerCase();
      shiftToggle = true;
    } else if (item === item.toUpperCase() && item.match(/[a-z]/i) && shiftToggle) {
      item = item.toLowerCase();
    } else if (item === item.toLowerCase() && item.match(/[a-z]/i) && shiftToggle) {
      count += calculateMoves(curr, '^', keyboard);
      curr = '^';
      shiftToggle = false;
    }
    count += calculateMoves(curr, item, keyboard);
    curr = item;
  });
  return count;
}

function calculateMoves(A, B, keyboard) {
  return Math.abs(keyboard[A][0] - keyboard[B][0]) + Math.abs(keyboard[A][1] - keyboard[B][1]) + 1;
}