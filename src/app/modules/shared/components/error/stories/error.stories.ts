import { storiesOf, moduleMetadata } from '@storybook/angular';

import { SharedModule } from 'src/app/modules/shared/shared.module';

storiesOf('Error Component', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule],
      declarations: [],
      providers: []
    })
  )
  .add('Default', () => {
    return {
      template: '<app-error></app-error>',
      props: {}
    };
  })
