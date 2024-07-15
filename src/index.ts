import '@style/main.css';
import Phone from '@assets/images/phone.png';
import { sayHi } from '@utils/main';
import printMe from './printMe';
import obj from './store/obj';

const initApp = () => {
  const element = document.createElement('div');
  element.id = 'root';

  element.innerHTML = `
    <h2>Hello world</h2>

    <img src='${Phone}'/>
  `;

  const btn = document.createElement('button');
  btn.innerText = 'Say Hi';
  btn.onclick = () => {
    import('./printMe').then((module: any) => {
      const printMe = module.default;
      printMe(10);
    });
  };

  // import('lodash').then(({ default: _ }: any) => {
  //   console.log(
  //     'Index.ts lodash join:: ',
  //     _.join(['truong', 'duc', 'vien'], '~~')
  //   );
  // });

  document.body.append(btn);
  document.body.append(element);
};

initApp();
