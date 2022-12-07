import { url } from 'inspector';
import Image from '../../atom/Image';

const goToMenu = (link: string) => {
  console.log(link);
};

export const button_list = [
  {
    children: 'test',
    clickHandler: () => goToMenu('web'),
    width: 5,
    height: 10,
    backgroundColor: '#bcbcbc',
    textColor: 'black',
  },
  {
    children: 'test',
    clickHandler: () => goToMenu('unity'),
    width: 5,
    height: 10,
    backgroundColor: '#bcbcbc',
    textColor: 'black',
  },
];
