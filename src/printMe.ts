import obj from './store/obj';
import * as _ from 'lodash';

const printMe = (number: number) => {
  console.log('This is called from printMe.ts');

  console.log(
    'Index.ts lodash join:: ',
    _.join(['truong', 'duc', 'vien'], '~')
  );

  // import('lodash').then(({ default: _ }: any) => {
  //   console.log(
  //     'Index.ts lodash join:: ',
  //     _.join(['truong', 'duc', 'vien'], '~')
  //   );
  // });
};

export default printMe;
