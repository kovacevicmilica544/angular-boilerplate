import { storiesOf, moduleMetadata } from '@storybook/angular';

import { SharedModule } from 'src/app/modules/shared/shared.module';

storiesOf('Input Component', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule],
      declarations: [],
      providers: []
    })
  )
  .add('Default', () => {
    return {
      template: '<app-input></app-input>',
      props: {}
    };
  })
  .add('Input with placeholder', () => {
    return {
      template: '<app-input [inputPlaceholder]="placeholder"></app-input>',
      props: {
        placeholder: "Enter text here..."
      }
    };
  })
  .add('Input with label and placeholder', () => {
    return {
      template: '<app-input [inputPlaceholder]="placeholder" [label]="label"></app-input>',
      props: {
        label: 'Email:',
        placeholder: "Enter email here..."
      }
    };
  })
