export const example_text = `이것은 첫번째 줄이고
이것은 두번째 줄이다
이런식으로 쓰여진글이 줄바꿈이 된다면
isMultiLine이 잘 작동한다는 반증이다`;

const clickEvent = () => {
  console.log('click');
};

export const button_list = [
  {
    children: 'name1',
    clickHandler: clickEvent,
    width: 15,
    height: 3,
    backgroundColor: '#bcbcbc',
    textColor: 'black',
  },
  {
    children: 'name2',
    clickHandler: clickEvent,
    width: 15,
    height: 3,
    backgroundColor: '#cbcbcb',
    textColor: 'black',
  },
  {
    children: 'name3',
    width: 15,
    height: 3,
    clickHandler: clickEvent,
    backgroundColor: '#aaaaaa',
    textColor: 'black',
  },
];
